import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export interface Props {
    image?: string,
    style?: any
}

const QEImage: React.FC<Props> = (props) => {
    return (
        <Image source={{ uri: props.image}} style={{...styles.imgStyle, ...props.style}} />
    );
}

export default QEImage;