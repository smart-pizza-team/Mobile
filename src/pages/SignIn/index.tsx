import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'

export default function SignIn(){
  
  const { signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(){

    if(email === '' || password === ''){
      return;
    }

    await signIn({ email, password })
    
  }


  return(
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"   
          style={styles.input}     
          placeholderTextColor="#F0F0F0"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Sua senha"      
          style={styles.input}   
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}          
        />     

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          { loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>   
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1E0D0B'
  },
  inputContainer:{
    width: '95%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  input:{
    width: '95%',
    height: "35%",
    borderWidth: 1,
    borderColor: '#F08C2B',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF',
    fontSize: 15
  },
  button:{
    width: '95%',
    height: 45,
    backgroundColor: '#DF3821',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText:{
   fontSize: 18, 
   fontWeight: 'bold',
   color: '#FFF'
  }
})