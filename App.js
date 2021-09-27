// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import {View, StatusBar} from "react-native";

// import Routes from "./src/routes";


// export default function App() {

//   return(
//     <NavigationContainer>
//       <StatusBar background="#131313" barStyle="light-content" />
//       <Routes/>
//     </NavigationContainer>

//   );
// }

import React, {useState} from 'react';
import { FlatList } from 'react-native';
import { View, SafeAreaView, TextInput, Text, StyleSheet, TouchableOpacity  } from 'react-native-safe-area-context';
import { useState } from 'react/cjs/react.development';

import ProjetoFirebase from './src/firebase';
import TaskList from './src/firebase/TaskList';


const task = [
  {key: '1', name: 'Aprender React Native'},
  {key: '2', name: 'Aprender Zustand'},
  {key: '3', name: 'Aprender Arquitetura'},

]

export default function App() {
  // state para saber/detectar usuário logado ou não
  const [ user,setUser ] = useState(null);

  const [newTask, setNewTask] = useState('')

  if (!user) {
    return <ProjetoFirebase changeStatus={ (user) => setUser(user) }/>
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput 
          style={styles.input}
          placeholder="O que vai fazer hoje"
          value={newTask}
          onChangeText={ (text) => useState(text) }
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>


      </View>

      <FlatList 
        data={task}
        keyExtractor={ (item) => item.key }
        renderItem={ ({ item }) => (
          <TaskList data={item}/>
        )}
      
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  },
  containerTask:{
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd:{
    backgroundColor: '#141414',
    height: 45,
    alignItens: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
  }


})