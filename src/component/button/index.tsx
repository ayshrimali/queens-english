import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';

export interface Props {
    title: string,
    onPress: () => void,
    disable?: boolean,
    containerStyle?: any,
    textStyle?: any
}

const QEButon: React.FC<Props> = (props) => {
    return (
        <Pressable style={{...styles.buttonContainer, ...props.containerStyle, ...{ opacity: props.disable ? 0.5 : 1 }}} disabled={props.disable} onPress={props.onPress}>
            <Text style={{...styles.buttonText, ...props.textStyle}}>{props.title}</Text>
        </Pressable>
    );
}

export default QEButon;