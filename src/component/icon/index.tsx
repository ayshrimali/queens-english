import React from 'react';
import color from '../../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface Props {
    image: string,
    size: number
}

const QEIcon: React.FC<Props> = (props) => {
    return (
        <Icon name={props.image} size={props.size} color={color.primarycolor} />
    );
}

export default QEIcon;