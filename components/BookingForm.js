import { Text, SafeAreaView, StyleSheet,View,Image,ImageBackground,TextInput,Button,TouchableOpacity,Modal,FlatList } from 'react-native';
import {useState} from 'react';


export default function List({route,navigation}){

  const [obj,setObj]=useState([]);
  
 async function fetchData(){
   
const response = await fetch('https://sahoora-6c5f3-default-rtdb.firebaseio.com/Events/-O3q14Epgm5ToMGFTfFm/Products.json');
const data = await response.json();
const productData = [];

for(const key in data){
  const prodObj={
    id:key,
    title:data[key].title,
    description:data[key].description,
    price:data[key].price,
  }
  productData.push(prodObj);
}


setObj(productData);

 }

 function removeData(id){
   const response = fetch(`use your db url/Products/${id}.json`,{
     method:'DELETE'
   });

 }



  return(
    <View style={styles.list}>
    <Button title="Show Products" onPress={fetchData} />
    <FlatList data={obj} renderItem={ ({item})=> <View style={styles.listitem}>
    <Text style={styles.listtext}>{item.title}</Text>
    <Text style={styles.listtext}>{item.description}</Text>
    <Text style={styles.listtext}>{item.price}</Text>
    <Button title="Delete" onPress={()=>removeData(item.id)} />
    </View>}/>
  
    </View>
  )
  
}

const styles = StyleSheet.create({
   list: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'white',
  
  },
  listitem: {
    backgroundColor:'green',
    margin:8,
    justifyContent:'center',
    alignItems:'center'

  },
  listtext:{
    fontSize:25,
  }
});