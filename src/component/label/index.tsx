import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export interface Props {
    title?: string,
    header?: boolean,
    style?: any
}

const QELabel: React.FC<Props> = (props) => {
    return (
        <Text style={{...styles.labelStyle, ...(props.header ? styles.headerStyle : {}), ...props.style}}>{props.title}</Text>
    );
}

export default QELabel;