import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import { StylesConfig } from '../../utils/styleconfig';

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: StylesConfig.countPixelRatio(18),
        textAlign: 'center',
        color: color.dark
    },
    headerStyle: {
        fontSize: StylesConfig.countPixelRatio(20),
        fontWeight: 'bold'
    }
});

export default styles;