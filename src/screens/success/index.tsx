import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import QECommonToolbar from '../../component/commontoolbar';
import string from '../../utils/string';
import commonStyles from '../../utils/commonstyles';
import QECol from '../../component/column';
import QEIcon from '../../component/icon';
import QELabel from '../../component/label';

const SuccessScreen = ({ route, navigation }: StackScreenProps<any>) => {
    return (
        <SafeAreaView style={commonStyles.safeAreaContainer} >
            <QECol fill={true}>
                <QECommonToolbar title={string.success} />
                <QECol fill={true} center={true}>
                    <QEIcon image="check-circle" size={80} />
                    <QELabel title={string.success} />
                </QECol>
            </QECol>
        </SafeAreaView>
    );
}
export default SuccessScreen;
