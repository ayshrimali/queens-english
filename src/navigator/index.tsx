import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splash';
import Routes from './routes';
import DashboardScreen from '../screens/dashboard';
import SuccessScreen from '../screens/success';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName={Routes.Splash}>
                <Stack.Screen name={Routes.Splash} component={SplashScreen} />
                <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
                <Stack.Screen name={Routes.Success} component={SuccessScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;