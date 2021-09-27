// import react, { useState, useEffect } from 'react';

// export default function App() {
//     const [email, setEmail] = useState('');
//     const [passsword, setPassword] = useState('');

//     async function logar(){
//         await firebase.auth().signInWithEmailAndPassword(email, passsword).then( (value) => {
//             alert('Bem vindo: ' + value.user.email);
//         })
//         .catch((error) => {
//             alert('ops algo deu errado!');
//             return;
//         })

//         setEmail('');
//         setPassword(''); 
//     }
// }

import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import './style';
import firebase from '../services/firebaseConnect';

// componente de login
export default function ProjetoFirebase({ changeStatus }) {

  const [type, setType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //usuário ao clicar, qual operação o mesmo quer fazer cadastrar/logar
  function handleLogin() {
    
    //aqui fazemos o login
    if (type === 'login') {

      const user = firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        changeStatus(user.user.uid)
      })
      //tratamento de erro
      .catch((error) => {
        console.log(error);
        alert('OPS DEU ERRADO!')
        return;
      })

    }else{
      //aqui cadastramos o usuário
      const user = firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((error) => {
        console.log(error);
        alert('OPS ALGO DEU ERRO AO CADASTRAR!')
        return;
      })
    }
  }


  return(
    <SafeAreaView>

      <TextInput 
        placeholder="Digite seu email"
        style={styles.input}
        value={email}
        //texto inserido no campo email pelo usuário
        onChangeText={ (text) => setEmail(text) } 
      />

      <TextInput 
        placeholder="Digite sua senha"
        style={styles.input}
        value={password}
        //texto inserido no campo email pelo usuário
        onChangeText={ (text) => setEmail(text) } 
      />

      <TouchableOpacity style={styles.handleLogin}>
        <Text>{ type === 'login' ? 'Acessar' : 'Cadastrar'}</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}
      >
        <Text style={{textAlign: 'center'}}>
          { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
        </Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}