
import { View, Text, TextInput, TouchableOpacity,
    Image, FlatList } from 'react-native' 
    import styles from './register.style' ;
    import { ScreenHeaderBtn } from '../../components';
    import { Stack } from 'expo-router';
    import { COLORS, SIZES, icons, images } from '../../constants';
    import { useState } from 'react';
    import { ScrollView } from 'react-native-gesture-handler';
    
    
    const Register = () => {
     
      const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
    
      return (
        <ScrollView showsHorizontalScrollIndicator={false}>
    
        <View style={{flex:1 , padding: SIZES.medium}}>
    
    <View style={styles.container}>
    <View style={{flex:1 , padding: SIZES.medium}}>
    
    <View style={styles.containerLogo}>
    
    <View style={styles.styleLogo}>
    
    
            <Image  style={{width: 200  , resizeMode: 'contain'}} source = {require("../../assets/images/Vtiger-logo-png.png")}  /> 
    
            </View>
    
            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            /> 
          </View> 
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            /> 
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text> 
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text> 
          </TouchableOpacity>
    
          </View>
    
    
         </View>
         </View>
    
         </View>
    </ScrollView>
    
      )
    }
    
    export default Register