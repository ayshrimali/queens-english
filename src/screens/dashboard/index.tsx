import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, Animated, Alert } from 'react-native';
import QECommonToolbar from '../../component/commontoolbar'
import string from '../../utils/string';
import Routes from '../../navigator/routes';
import { StackScreenProps } from '@react-navigation/stack';
import { AudioHelper } from '../../utils/audioHelper';
import { APIHelper } from '../../network/apiHelper';
import { Question } from '../../models/question';
import QELabel from '../../component/label';
import QEImage from '../../component/image';
import QEButon from '../../component/button';
import QERow from '../../component/row';
import QECol from '../../component/column';
import QEImageButon from '../../component/imagebutton';
import commonStyles from '../../utils/commonstyles';

const DashboardScreen = ({ navigation }: StackScreenProps<any>) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question>();
    const [audioFile, setAudioFile] = useState<string>('');
    const [recording, setRecording] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [paused, setPaused] = useState<boolean>(true);
    const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(false);
    
    let audioHelper = new AudioHelper();

    useEffect(() => {
        audioHelper.setupAudio()
        .then((success) => {
            setIsPermissionGranted(success);
            if (!success) {
                Alert.alert(string.permission_mic);
            }
        });

        fetchQuestions();
    }, [])

    const fetchQuestions = () => {
        APIHelper.fetchAllQuestions()
        .then((questions: Question[]) => {
            setQuestions(questions);
            if (questions.length) {
                setCurrentIndex(0);
                setCurrentQuestion(questions[0]);
            }
        })
        .catch((error) => {
            Alert.alert(error);
        })
    }

    const startRecording = async () => {
        const result = await audioHelper.checkPermission();
        if (result) {
            setAudioFile('');
            setRecording(true);
            setLoading(false);
            audioHelper.startRecording();
        } else {
            Alert.alert(string.permission_mic);
        }
    }

    const stopRecording = async () => {
        if (!recording) return;
        let audioFile = await audioHelper.stopRecording();
        setAudioFile(audioFile);
        setRecording(false);
    }

    const loadRecording = async () => {
        const error = await audioHelper.loadRecording(audioFile);
        if (!error) {
            setLoading(true);
        }
        return error;
    }

    const pauseRecording = () => {
        audioHelper.pauseSound();
        setPaused(true);
    }

    const handleOnSubmitClick = () => {
        if (currentIndex < (questions.length - 1)) {
            setCurrentQuestion(questions[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate(Routes.Success);
        }
    }

    const playRecording = async () => {
        if (!loading) {
            const error = await loadRecording();
            if (error) {
                Alert.alert(error);
                return;
            }
        }

        const finished = await audioHelper.playSound();
        if (finished) {
            setPaused(true);
            console.log('playback finished');
        } else {
            console.log('playback failed');   
        }
    }

    const handlePlayState = () => {
        if (!paused) {
            pauseRecording();
        } else {
            playRecording();
        }
    }

    const resetAudio = () => {
        setAudioFile('');
        setRecording(false);
        setLoading(false);
        setPaused(true);
    }
    
    return (
        <SafeAreaView style={commonStyles.safeAreaContainer}>
            <QECommonToolbar title={string.quetions} />
            <QECol style={{ marginVertical: 20 }}>
                <QELabel title={`${currentIndex + 1} / ${questions.length}`} header={true} />
                <QELabel title={currentQuestion?.title} />
                <QEImage image={currentQuestion?.imageUrl} />
                <QEButon disable={!audioFile} onPress={handleOnSubmitClick} title={string.submit} />
                <QERow center={true} style={{ marginVertical: 10 }}>
                    <QEImageButon disable={!audioFile} image={'sync-alt'} onPress={resetAudio} />
                    <QEImageButon disable={!isPermissionGranted} animate={true} image={'microphone-alt'} onPressIn={startRecording} onPressOut={stopRecording} />
                    <QEImageButon disable={!audioFile} image={!paused ? 'pause' : 'play'} onPress={handlePlayState} />
                </QERow>
                <QERow center={true} style={{marginVertical: 10}}>
                    <QELabel title={string.press_and_hold} />
                </QERow>
            </QECol>
        </SafeAreaView>
    );
}

export default DashboardScreen;
