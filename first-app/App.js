import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  var title = "Lista de Tareas";
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.inputsContainer}>
        <Text>Añadir</Text>
        <TextInput style={styles.inputText} type="text" placeholder="..." />
        <TouchableOpacity style={styles.addButton} onPress={() => alert("Tarea añadida")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <ScrollView contentContainerStyle={{ gap: 4 }}>
          <TaskItem title="Estudiar React Native" />
          <TaskItem title="Hacer ejercicio" />
          <TaskItem title="Cocinar la cena" />
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    gap: 10,

  },
  addButton: {
    backgroundColor: '#287ff4',
    width: '15%',
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    margin: 'auto',
    fontSize: 17,
  }
  ,
  inputText: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 10,
    borderRadius: 5,
  },
  tasksContainer: {
    marginTop: 30,
    width: '80%',
  }

});
