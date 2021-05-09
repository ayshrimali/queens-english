import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import QECol from '../../component/column';
import QELabel from '../../component/label';
import Routes from '../../navigator/routes';
import color from '../../utils/color';
import string from '../../utils/string';
import { StylesConfig } from '../../utils/styleconfig';

const SplashScreen = ({ navigation }: StackScreenProps<any>) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Routes.Dashboard)
        }, 2000)
    }, [])
    return (
        <QECol fill={true} center={true} style={{backgroundColor: color.primarycolor}}>
            <QELabel title={string.app_name} style={{color: 'white', fontWeight: '700', fontSize: StylesConfig.countPixelRatio(50)}} />
        </QECol>
    );
}

export default SplashScreen;
