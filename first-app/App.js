import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  var title = "¡Mi primera app con React Native!";
  var alertText = "¡Hola mundo!";
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
      <Button title="Presióname" onPress={() => alert((alertText))} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 100,
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});
