import {React,useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
const Next = ({route,navigation}) => {
  const f = navigation.getParam('f')
  const l = navigation.getParam('l');
  const [spass,setPass] = useState('');
  const [rpass,setRpass] = useState('');
  const [sum,setSum] = useState('Submit')
  
  return (
    <View>
        <Text>Welcome, {f+" "+l}</Text>
        <Text>Set New Password</Text>
      <TextInput secureTextEntry={true} style={styles.input} 
        onChangeText={spasstext =>setPass(spasstext)}></TextInput>
        <Text>Retype Password</Text>
      <TextInput secureTextEntry={true} style={styles.input} 
        onChangeText={rpasstext =>setRpass(rpasstext)}></TextInput>
      <TouchableOpacity onPress={()=>setSum('Registered Successfully')}  style={styles.sum}>
          <Text style={styles.text}>{sum}</Text>
        </TouchableOpacity>  
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sum:{
    width:100,
    borderWidth: 1,
    borderColor:'black',
    backgroundColor:'lightblue',
    //paddingLeft: 15,
    alignSelf:'center',
    alignItems:'center',
    borderRadius:5,
  },})

export default Next