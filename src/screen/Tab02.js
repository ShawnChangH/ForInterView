/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button
 } from 'react-native';
 
 
 const Tab02 = ({ navigation }) => {
 
   
   return (
     <SafeAreaView>
       <ScrollView contentInsetAdjustmentBehavior="automatic" >
         
       </ScrollView>
       <Button
        onPress={() => navigation.navigate('Home')}
        title="Go Home"
      />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
 });
 
 export default Tab02;
 