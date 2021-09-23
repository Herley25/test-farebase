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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react/cjs/react.development';

import ProjetoFirebase from './src/firebase';


export default function App() {
  // state para saber/detectar usuário logado ou não
  const [ user,setUser ] = useState(null);

  if (!user) {
    return <ProjetoFirebase changeStatus={ (user) => setUser(user) }/>
  }

  return(
    <SafeAreaView>
      <Text>DENTRO DA TELA DE TAREFAS</Text>
    </SafeAreaView>
  );
}