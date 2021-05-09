import { Dimensions, Platform, PlatformIOSStatic } from 'react-native';

export class StylesConfig {
  public static readonly screenSize = Dimensions.get('window');
  public static readonly isIphone = Platform.OS === 'ios';
  public static readonly isAndroid = Platform.OS === 'android';
  public static readonly height = StylesConfig.screenSize.height;
  public static readonly widthPer = StylesConfig.screenSize.width / 100;
  public static readonly heightPer = StylesConfig.screenSize.height / 100;
  public static readonly deviceType = StylesConfig.screenSize.width < 480 ? 'phone' : 'tablet';
  public static readonly iPhoneX = Platform.OS === 'ios' && (StylesConfig.screenSize.height === 812 || StylesConfig.screenSize.height === 896);
  public static readonly ratioCount = Math.sqrt(StylesConfig.screenSize.height * StylesConfig.screenSize.height + StylesConfig.screenSize.width * StylesConfig.screenSize.width) / 1000;
  public static readonly isTab = StylesConfig.isTablet();
  public static readonly isPhone = !StylesConfig.isTablet();

  public static countPixelRatio(size: number) {
    return size * StylesConfig.ratioCount;
  }

  public static responsiveHeight(size: number) { 
    return size * StylesConfig.heightPer 
  }

  public static responsiveWidth(size: number) { 
    return size * StylesConfig.widthPer
  }

  public static smartScale(value: number) {
    const screenSize = StylesConfig.screenSize;
    const tempHeight = Platform.OS === 'ios' ? (StylesConfig.iPhoneX ? screenSize.height - 78 : screenSize.height) : screenSize.height - 24;
    if (StylesConfig.deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  }

  public static smartWidthScale(value: number) {
    const tempWidth = StylesConfig.screenSize.width;
    if (StylesConfig.deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  }

  public static isTablet() {
    if (StylesConfig.isIphone) {
      return (Platform as PlatformIOSStatic).isPad;
    } else {
      return StylesConfig.screenSize.height / StylesConfig.screenSize.width <= 1.6;
    }
  }
}
