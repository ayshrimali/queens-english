import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import { StylesConfig } from '../../utils/styleconfig';

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        marginVertical: StylesConfig.smartScale(30),
        paddingHorizontal: StylesConfig.smartWidthScale(80),
        paddingVertical: StylesConfig.smartScale(12),
        borderRadius: StylesConfig.countPixelRatio(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primarycolor
    },
    buttonText: {
        fontWeight: '600',
        fontSize: StylesConfig.countPixelRatio(20),
        color: color.light
    }
});

export default styles;