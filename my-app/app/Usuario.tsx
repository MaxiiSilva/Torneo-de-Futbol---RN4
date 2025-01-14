import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handlePressFans = () => {
    navigation.navigate('Fans');
  };
  const handlePressJugadores = () => {
    navigation.navigate('Jugadores');
  };
  const handlePressAdministrador = () => {
    navigation.navigate('Admin');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/fondo.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Selecciona tu tipo de usuario para comenzar a disfrutar de la mejor copa</Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handlePressAdministrador}>
                <Image source={require('C:/Users/Maxi Silva/Desktop/torneo/my-app/assets/images/admin.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Administrador</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handlePressJugadores}>
                <Image source={require('C:/Users/Maxi Silva/Desktop/torneo/my-app/assets/images/jugador.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Jugadores</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handlePressFans}>
                <Image source={require('C:/Users/Maxi Silva/Desktop/torneo/my-app/assets/images/fans.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Seguidor</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});