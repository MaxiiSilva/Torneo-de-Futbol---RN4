import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '/torneo/my-app/app/(tabs)/index';
import Usuario from 'torneo/my-app/app/Usuario';
import Seguidor from 'torneo/my-app/app/Seguidor';
import Jugadores from 'torneo/my-app/app/Jugadores';
import Administrador from 'torneo/my-app/app/Administrador';
import Estangasions from 'torneo//my-app/app/Estangasions';

type RootStackParamList = {
    HomeScreen: undefined;
    Usuario: undefined;
    Seguidor: undefined;
    Jugadores: undefined;
    Administrador: undefined;
    Estangasions: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#007387',
                },
                headerTintColor: '#fff', 
                headerTitleStyle: {
                    textAlign: 'center',
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Usuario" component={Usuario} />
            <Stack.Screen name="Administrador" component={Administrador} />
            <Stack.Screen name="Jugadores" component={Jugadores} />
            <Stack.Screen name="Seguidor" component={Seguidor} />
            <Stack.Screen name="Estangasions" component={Estangasions} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

const AppContainer = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
};

export default AppContainer;