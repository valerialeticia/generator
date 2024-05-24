import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('@/assets/images/logo.png')}
      />
      <Text style={styles.title}>16 caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
