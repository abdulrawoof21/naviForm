import {React,useState} from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';


const Home = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('D/M/YYY');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [fp, stFp]=useState('');
  const [lp, stLp]=useState('');
  // const [addr, setAddr] = useState(
  //   {date: "",
  //   }
  // )
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!fname.trim()) {
      stFp('First Name Cant be empty');
      return false;
    }
    //Check for the Email TextInput
    if (!lname.trim()) {
      stLp('Last Name Cant be empty');
      return false;
    }
    //Checked Successfully
    //Do whatever you want
    return true;
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    
    let tempDate = new Date(currentDate);
    let fDate=tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
    setText(fDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  // const showTimepicker = () => {
  //   showMode('time');
  // };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>First Name</Text>
      <TextInput style={styles.input} 
        onChangeText={ftext =>setFname(ftext)} placeholder={fp}></TextInput>
      <Text style={styles.text}>Last Name</Text>
      <TextInput style={styles.input}
        onChangeText={ltext =>setLname(ltext)} placeholder={lp}></TextInput>
      
      
      <View >
        <Text style={styles.text}>Date of Birth : {text}</Text>
        <TouchableOpacity onPress={()=>showMode('date')}  style={styles.dob}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>      
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            onChange={onChange}
            display='default'
            
          />
        )}
      </View>
    <Text style={styles.text}>Email</Text>
    <TextInput style={styles.input}></TextInput>
    <Text style={styles.text}>Phone</Text>
    <TextInput style={styles.input}></TextInput>
        <TouchableOpacity onPress={()=>{if(checkTextInput())
            {navigation.navigate('Next',{f:fname,l:lname})}}} style={styles.continue}><Text style={styles.text}>Continue</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  root:{
    
  },
  text:{
    fontSize:18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
  },
  dob:{
    width:25,
    borderWidth: 1,
    borderColor:'black',
    backgroundColor:'lightblue',
    position: 'absolute', 
    right: 150,
    // paddingLeft: 7,
    alignItems:'center',
    borderRadius:5,
  },
  continue:{
    width:100,
    borderWidth: 1,
    borderColor:'black',
    backgroundColor:'lightblue',
    //paddingLeft: 15,
    alignSelf:'center',
    alignItems:'center',
    borderRadius:5,
  }
});

export default Home