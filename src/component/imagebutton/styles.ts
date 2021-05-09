import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import { StylesConfig } from '../../utils/styleconfig';

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: StylesConfig.countPixelRatio(60),
        marginHorizontal: StylesConfig.smartWidthScale(20),
        height: StylesConfig.countPixelRatio(60),
        borderRadius: StylesConfig.countPixelRatio(30),
        backgroundColor: color.primaryopacity,
        opacity: 1
    }
});

export default styles;