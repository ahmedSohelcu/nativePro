import React, { Fragment,Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
  FlatList,
  TextInput,Picker,
} from 'react-native';

//import { Container, Header, Content,Button, Badge, Text, Icon } from 'native-base';

const MyData = (data) =>{
    return (
        <Text>From my data function. And name is : {data.name} And my email is {data.email}</Text>
    );
}

//Start main class...
export class LotsOfStyles extends React.Component {
    state = {
      name : 'loading...'
    }

    componentDidMount(){
          fetch('https://jsonplaceholder.typicode.com/comments/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name : data.body
                });
            })
  }



  render() {
    return (
      <Fragment>
            <ScrollView>
                    <View style={{width: 360, height: 90, backgroundColor: '#000'}}>
                       <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>This is a Demo Project & Developed by :</Text>
                       <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>Ahmed sohel</Text>
                       <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>24.9.2019</Text>
                    </View>

                    <View style={styles.container}>
                        <MyData name="Ahmed sohel.." email="ahmed@gmail.com"/>

                         <Button
                         onPress={() => {
                           alert('This function is created by Ahmed..!');
                         }}
                         color="#841584"
                         title="Click to get Alert"/>


                          <Text style={[styles.bigBlue,styles.mB10 ]}>PHP Laravel Framework শেখার আগে কি কি বিষয় জানতে হবে? </Text>

                          <Text style={styles.f20}>
                            PHP Laravel Framework শেখা শুরু করার আগে, আপনাকে অবশ্যই নিম্নের বিষয় গুলো জানতে হবে:
                          </Text>
                          <Text style={styles.bullet}>1. PHP</Text>
                          <Text style={styles.bullet}>2. Object Oriented Concepts এবং</Text>
                          <Text style={styles.bullet}>3. MVC structure সম্পর্কে পরিষ্কার ধারণা।</Text>

                          <Text style={styles.bullet}>
                            4.আর Laravel Framework এর Dependency Manage করার জন্য Composer অবশ্যই ইন্সটল করা থাকতে হবে।
                          </Text>
                    </View>

                    <View style={styles.container_2}>
                          <Text style={[styles.bigBlue,styles.mB10 ]}>PHP Laravel Framework শেখার আগে কি কি বিষয় জানতে হবে? </Text>
                          <Text style={styles.f20}>
                            PHP Laravel Framework শেখা শুরু করার আগে, আপনাকে অবশ্যই নিম্নের বিষয় গুলো জানতে হবে:
                          </Text>
                          <Text style={styles.bullet}>1. PHP</Text>
                          <Text style={styles.bullet}>2. Object Oriented Concepts এবং</Text>
                          <Text style={styles.bullet}>3. MVC structure সম্পর্কে পরিষ্কার ধারণা।</Text>

                          <Text style={styles.bullet}>
                            4.আর Laravel Framework এর Dependency Manage করার জন্য Composer অবশ্যই ইন্সটল করা থাকতে হবে।
                          </Text>
                    </View>

                    <View style={{width: 360, height: 90, backgroundColor: '#000'}}>
                        <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>This Application is Developed by :</Text>
                        <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>Ahmed sohel...</Text>
                        <Text style={{color:'#fff',marginTop:10,textAlign:'center'}}>Chottogram,Bangladesh</Text>
                    </View>

            </ScrollView>
      </Fragment>
    );
  }
}


export default LotsOfStyles;



const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#ffebcd',
  },
  container_2:{
    padding:10,
    backgroundColor:'#ffffff',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
  },
  bigBlack :{
    color:'red',
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
  },
  blackTitle:{
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
   },

  fText :{
    color :'red',
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
  },
  f30:{
    fontSize:30
  },
  f25:{
    fontSize:25
  },
  t_center:{
    textAlign:'center',
    marginBottom:40,
  },
  mB10:{
    marginBottom:10
  },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
  f20:{
   fontSize:19,
   padding:10,
  },
  bullet:{
    marginLeft:25,
    marginBottom:5,
    fontWeight:'bold',
    fontSize:18,
  }

});






