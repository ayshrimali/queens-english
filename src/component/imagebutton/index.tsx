import React, { useState } from 'react';
import { Animated, Pressable } from 'react-native';
import styles from './styles';
import QEIcon from '../icon';

export interface Props {
    image: string,
    onPress?: () => void,
    onPressIn?: () => void,
    onPressOut?: () => void,
    animate?: boolean,
    disable?: boolean,
    containerStyle?: any,
    imgStyle?: any
}

const QEImageButon: React.FC<Props> = (props) => {

    const [animatePress, setAnimatePress] = useState<Animated.Value>(new Animated.Value(1));

    const animateIn = () => {
        Animated.timing(animatePress, { toValue: 1.5, duration: 500, useNativeDriver: false }).start()
    }

    const animateOut = () => {
        Animated.timing(animatePress, { toValue: 1, duration: 500, useNativeDriver: false }).start()
    }

    return (
        <Animated.View style={{ transform: [{ scale: animatePress }] }}>
            <Pressable style={[styles.buttonContainer, props.containerStyle]} disabled={props.disable} onPress={props.onPress} onPressIn={() => {
                props.onPressIn?.call(this);
                if (props?.animate)
                    animateIn();
            }} onPressOut={() => {
                props.onPressOut?.call(this);
                if (props?.animate)
                    animateOut();
            }}>
                <QEIcon image={props.image} size={20} />
            </Pressable>
        </Animated.View>
    );
}

export default QEImageButon;