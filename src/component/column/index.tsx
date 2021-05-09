import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export interface Props {
    center?: boolean,
    style?: any,
    fill?: boolean
}

const QECol: React.FC<Props> = (props) => {
    return (
        <View style={{
            ...styles.colStyle, 
            ...props.style, 
            ...(props.center ? styles.centerStyle : {}),
            ...(props.fill ? styles.fillStyle : {})
        }}>{props.children}</View>
    );
}

export default QECol;