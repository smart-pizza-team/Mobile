import React, { useState }  from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet,
  Image,} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { api } from '../../services/api'

export default function Dashboard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [number, setNumber] = useState('');
 

  async function openOrder(){
    if(number === ''){
      return;
    }

    const response = await api.post('/order', {
      table: Number(number)
    })

    //console.log(response.data);

    navigation.navigate('Order', { number: number, order_id: response.data.id })

    setNumber('');

  }
  

  return(
    <SafeAreaView style={styles.container}>
        <Text 
        style={{
          color:'#FFF',
          fontWeight: 'bold',
          fontSize: 28,
          alignSelf: 'flex-start',
          paddingHorizontal: 20,
          marginTop: 30
          }}>Pedidos</Text>
      
      <View style={styles.body}>
        <Image source={require('../../assets/logo.png')}/>

        <TextInput
          placeholder="Número da mesa"
          placeholderTextColor="#F0F0F0"
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />

        <TouchableOpacity style={styles.button} onPress={openOrder}>
          <Text style={styles.buttonText}>Abrir mesa</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#1E0D0B'
  },
  body:{
    width: '80%',
    height: '47%',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  
  input:{
    width: '90%',
    height: 60,
    borderWidth: 1,
    borderColor: '#F08C2B',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'left',
    fontSize: 15,
    color: '#FFF'
  },
  button:{
    width: '90%',
    height: 40,
    backgroundColor: '#DF3821',
    borderRadius: 4,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})