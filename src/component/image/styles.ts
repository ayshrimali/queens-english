import { StyleSheet } from 'react-native'
import { StylesConfig } from '../../utils/styleconfig';

const styles = StyleSheet.create({
    imgStyle: {
        height: StylesConfig.smartScale(280),
        width: StylesConfig.smartWidthScale(300),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: StylesConfig.smartScale(20)
    }
});

export default styles;