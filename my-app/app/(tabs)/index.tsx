import { StyleSheet, TouchableOpacity, View, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Usuario');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('C:/Users/Maxi Silva/Desktop/torneo/my-app/assets/images/fondo.jpg')}
        style={styles.background}
        resizeMode="cover"
      > 
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.logoTamaño}>
              <Image
                source={require('C:/Users/Maxi Silva/Desktop/torneo/my-app/assets/images/logo-copa.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <ThemedText style={styles.text}>
              Disfruta de la Mejor Copa del Fútbol Lo Mas Cerca Posible.
            </ThemedText>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>EMPIEZA YA</Text>
            </TouchableOpacity>
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
    
    backgroundColor: 'rgba(255, 255, 255,0.4)',

  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoTamaño: {
    width: 200,
    height:175,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  estangaText: {
    color: 'white',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
});