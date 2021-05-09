
import { Platform } from 'react-native';
import AudioRecord from 'react-native-audio-record';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import Sound from 'react-native-sound';


export class AudioHelper {

    private sound?: Sound;

    public async checkPermission() {
        const micPermission = Platform.select({
            ios: PERMISSIONS.IOS.MICROPHONE,
            android: PERMISSIONS.ANDROID.RECORD_AUDIO
        });
        if (micPermission) {
            const p = await Permissions.check(micPermission);
            if (p === 'granted') return true;
            return this.requestPermission();
        } else {
            return false;
        }
    }

    public async requestPermission() {
        const micPermission = Platform.select({
            ios: PERMISSIONS.IOS.MICROPHONE,
            android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        });
        if (micPermission) {
            const p = await Permissions.request(micPermission);
            if (p === 'granted') {
                return true;
            }
        }
        return false;
    };

    public async setupAudio() {
        const hasPermission = await this.checkPermission()
        if (hasPermission) {
            // setIsPermissionGranted(true)
            const options = {
                sampleRate: 16000,
                channels: 1,
                bitsPerSample: 16,
                wavFile: 'test.wav'
            };
            AudioRecord.init(options);
            AudioRecord.on('data', data => { 
                // TODO: handle audio data here
            });
        } else {
            // Alert.alert(string.permission_mic);
            // setIsPermissionGranted(false);
        }
        return hasPermission;
    }

    public startRecording() {
        AudioRecord.start();
    }

    public async stopRecording() {
        return await AudioRecord.stop();
    }

    public async loadRecording(audioFile: string) {
        return new Promise<string | null>((resolve, reject) => {
            if (!audioFile) {
                return reject('Invalid audio file');
            }
    
            this.sound = new Sound(audioFile, '', (error) => {
                if (error) {
                    return reject(error);
                }

                return resolve(null);
            });
        });
    }

    public stopPlaying() {
        this.sound?.pause();
    }

    public async playSound() {
        return new Promise((resolve, reject) => {
            Sound.setCategory('Playback');
            this.sound?.play((sucess) => {
                resolve(sucess);
                return;
            });
        });
    }

    public pauseSound() {
        this.sound?.pause();
    }

    public stopSound() {
        this.sound?.stop();
    }
}