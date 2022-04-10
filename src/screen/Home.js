/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React ,{useState,useEffect}from 'react';
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
 import axios from 'axios';
 const baseUrl ='https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'


  
 const Home = ({ navigation }) => {
 
    const [productListArray, setProductListArray] = useState(null)

    useEffect(()=>{
        getProduct()
      },[])

    const getProduct = () => {
        axios.get(baseUrl)
            .then((response) => {
                console.log('response:', response.data);
                setProductListArray(response.data)
                
            })
            .catch((error) => {
                console.log('error:' + error);
            });
    }
   
   return (
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         {Array.isArray(productListArray) && productListArray.length > 0 && productListArray.map((value, index) => {
                    return (
                        <View key={value.city} style={styles.box}>
                            <Text style={{marginRight:10}}>
                            姓名：{value.name}
                            </Text>
                            <Text>
                            城市：{value.city}
                            </Text>
                        </View>
                         
                        )
                }) }
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
     box:{
        flex:1,
        flexDirection:'row',
        padding:12,
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginHorizontal:8,
     }
 });
 
 export default Home;
 