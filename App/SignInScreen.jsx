import {Image, View, Text, SafeAreaView, TextInput, ActivityIndicator, TouchableOpacity,  TouchableWithoutFeedback, Keyboard } from 'react-native'
import { loadAsync, useFonts, } from 'expo-font'; 
import {React, useEffect, useState} from 'react';
import {auth} from '../firebasae'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';

const SignInScreen = () => {

  const [isFocused, setIsFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const[email, setEmail] = useState ('');
  const[password, setPassword] = useState ('');

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("logged in with",user.email);
    }).catch(error => alert(error.message))
  } 

  const checkPasswordLength = () => {
    if(password.length > 7){
      handleSignIn()
    }
    else{
      alert("Password must be atleast 8 char!")
    }
  }

  const navigation = useNavigation();
  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged(user=>{
      if(user){
        navigation.navigate("Home")
      }
    })
    return unsubscribe;
  },[])

  const [fontsLoaded] = useFonts({
    'gilory-reg': require('../assets/gilroyFont/Gilroy-Regular.ttf'),
    'gilory-semibold': require('../assets/gilroyFont/Gilroy-SemiBold.ttf'),
    'gilory-bold': require('../assets/gilroyFont/Gilroy-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  const handleOutsidePress = () => {
    setIsFocused(false);
    setPasswordFocused(false);
    Keyboard.dismiss();  
  };


  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
    <SafeAreaView>
      <View className='bg-baseSaf flex flex-row justify-center items-center h-60 pt-10 px-24 ' >  
          <View className="">
          <Image className='h-36 w-36' source={require('../assets/mandir2.png')} />
          </View>
          <View className=" ">
            <Text className="font-giloryBold text-base  text-orange-900 leading-6">Welcome to Mandir Manthan  Your Gateway to Spiritual Exploration</Text>
          </View>
      </View>
      
    {/* sign up part!  */}

      <View className='p-4'>
        <Text className="font-giloryBold text-gray-900 text-2xl px-4">Sign In</Text>

      <View className='flex p-4 gap-2'>

        <View className=''>
          <Text className="font-gilorySemiBold text-gray-700 mb-2" >Email</Text>
          <TextInput className={isFocused?'border border-orange-300 bg-baseSaf rounded-lg p-2' : 'border border-orange-100 bg-textBoxBG rounded-lg p-2'}
           placeholder='example@mail.com' placeholderTextColor='rgb(143, 159, 182)'
           onFocus={()=>setIsFocused(true)}
           onBlur={()=>setIsFocused(false)}
           value={email}
           onChangeText={text => setEmail(text)}>
           </TextInput>
        </View>

        <View className=''>
          <Text className="font-gilorySemiBold text-gray-700 mb-2" >Password</Text>
          <TextInput  secureTextEntry={true} className={passwordFocused?'border border-orange-300 bg-baseSaf rounded-lg p-2' : 'border border-orange-100 bg-textBoxBG rounded-lg p-2'}
           placeholder='At least 8 characters' placeholderTextColor='rgb(143, 159, 182)'
           onFocus={()=>setPasswordFocused(true)}
           onBlur={()=>setPasswordFocused(false)}
           value={password}
           onChangeText={text => setPassword(text)}>
           </TextInput>
        </View>

      </View>

      <View className='p-4'>
      <TouchableOpacity onPress={checkPasswordLength} className='bg-buttonBG flex items-center justify-center py-3 px-2 rounded-lg'>
          <Text className='text-white font-gilorySemiBold text-base '>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center px-2">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-gray-500 font-gilorySemiBold">Or sign in with</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <View className='p-4'>
      <TouchableOpacity className='bg-gray-100 flex flex-row items-center justify-center py-3 px-2 rounded-lg'>
      <Image className='h-4 w-4 mr-3' source={require('../assets/Google.png')} />
          <Text className='text-gray-400 font-gilorySemiBold text-base '>Sign In with Google</Text>
        </TouchableOpacity>
      </View>

      <View className='flex items-center'>
        <Text className='font-gilorySemiBold text-gray-500'>Don't you have an account? <Text onPress={()=>navigation.navigate("SignUp")} className='text-blue-500'>Sign Up</Text></Text>
      </View>
      </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignInScreen