import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { loadAsync, useFonts, } from 'expo-font'; 
import {auth} from '../firebasae'
import { useNavigation } from '@react-navigation/core';




const HomeTemp = () => {

    const [fontsLoaded] = useFonts({
        'gilory-reg': require('../assets/gilroyFont/Gilroy-Regular.ttf'),
        'gilory-semibold': require('../assets/gilroyFont/Gilroy-SemiBold.ttf'),
        'gilory-bold': require('../assets/gilroyFont/Gilroy-Bold.ttf'),
      });
      
      if (!fontsLoaded) {
        return <ActivityIndicator size="large" />;
      }

      const navigation = useNavigation();

      const handleSignOut= () =>{
        auth.signOut()
        .then(()=>{
          navigation.replace("SignIn")
        })
      }

  return (
    <View className='bg-baseSaf'>
        <TouchableOpacity onPress={handleSignOut} className='bg-gray-100 p-4 relative mt-14 flex w-24 rounded-lg '>
            <Text className='text-gray-500 font-giloryBold'>Back log</Text>
        </TouchableOpacity>
      <View className='bg-baseSaf flex justify-center items-center h-screen  px-20 ' >  
          <View className="">
          <Image className='h-36 w-36' source={require('../assets/mandir2.png')} />
          </View>
            <Text className="font-giloryBold text-base text-center  text-orange-900 mb-6">
              your login email : {auth.currentUser?.email}
            </Text>

          <View className=" ">
            <Text className="font-giloryReg text-base text-center  text-orange-900 leading-6">Welcome to Mandir Manthan  Discover the Divine Essence of Temples</Text>
          </View>
      </View>
    </View>
  )
}

export default HomeTemp