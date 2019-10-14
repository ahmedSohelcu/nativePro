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


                <Text style={{color:'#000',marginTop:10,fontWeight:'bold',borderWidth:1,margin:5,padding:5}}>
                    {this.state.name}
                </Text>


                <MyData name="Ahmed sohel.." email="ahmed@gmail.com"/>

                <View>
                    <Text style={[styles.blackTitle,styles.mB10 ]}>Important Telephone Numbers of Chittagong :</Text>
                    <FlatList
                    data={[
                        {name: 'Dainik Azadi',phone:'612380-2'},
                        {name: 'Dainik Purbokone',phone:'650909'},
                        {name: 'Fire Brigade',phone:'716326-7'},
                        {name: 'Weather Office',phone:'721252'},
                        {name: 'Bakhrabad Gas',phone:'655974-7'},
                        {name: 'P.D.B',phone:'616806'},
                        {name: 'Radio Station',phone:'712709'},
                        {name: 'Sah Amanat Air Port',phone:'741532-42'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>Name: {item.name} - Phone No: {item.phone}</Text>} />
                </View>
                
                <Text style={[styles.bigBlue,styles.mB10 ]}>গ্রিন টির উপকারিতা :</Text>
                <Text style={styles.f20}>
                    নিজেকে সুন্দর আর সতেজ রাখতে চান?তাহলে রোজ চা খান।প্রতিদিন সকালে
                    ঘুম থেকে ওঠার পর একটু চা চাই না হলে মেজাজটাই বিগড়ে যায়।মন ভাল করতে আমারা চা নামক এই পানীয় টি কিন্তু মিস করি না।কিন্তু জানেন কি এমন
                    একধরনের চা এর কথা যা খেলে শুধু মন নয় শারীরিক নানান সমস্যার সমাধান হয়। এমনকি ত্বক ও চুল সুন্দর রাখতে এই চা খুবই কার্যকরী।এটি হল হল
                    গ্রীন টি (Green Tea) এর জাদু।সকালে শুধু  একবার পান করলেই এটিই আপনার পুরো শরীরের খেয়াল রাখবে।ভাবছেন তো এটা কিভাবে হয়? আসুন দেখেনি।
                     image :
                 </Text>

                 <Button
                 onPress={() => {
                   alert('This function is created by Ahmed..!');
                 }}
                 color="#841584"
                 title="Click to get Alert"/>

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 1 :</Text>
                 <Image source={require('./flexBox-tut/flex-1.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 2 :</Text>
                 <Image source={require('./flexBox-tut/flex-2.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 3 :</Text>
                 <Image source={require('./flexBox-tut/flex-3.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 4 :</Text>
                 <Image source={require('./flexBox-tut/flex-4.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 5 :</Text>
                 <Image source={require('./flexBox-tut/flex-5.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 6 :</Text>
                 <Image source={require('./flexBox-tut/flex-6.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 7 :</Text>
                 <Image source={require('./flexBox-tut/flex-7.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 8 :</Text>
                 <Image source={require('./flexBox-tut/flex-8.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 9 :</Text>
                 <Image source={require('./flexBox-tut/flex-9.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> Flex Tutorial 10 :</Text>
                 <Image source={require('./flexBox-tut/flex-10.png')} style={{width: 370, height: 200,marginBottom:5}} />

                 <Text style={[styles.bigBlue,styles.mB10 ]}> আহারে ঘুম! :</Text>
                 <Text style={styles.f20}>
                    আধুনিক গবেষণা বলছে বিশ্ব জুড়েই পর্যাপ্ত ঘুমের সংকটে শারীরিক এবং মানসিক সমস্যা গুরুতর আকার ধারণ করছে। হৃদরোগ জনিত সমস্যা, উচ্চ রক্তচাপ জনিত
                    সমস্যা, অবসাদ, মাত্রাতিরিক্ত উদ্বেগ ক্রমশ বেড়েই চলছে সমাজে। চিকিৎসক এবং গবেষকরা এর পেছনে অনেকাংশেই দায়ী করছেন ঘুমের অভাবকে। সম্প্রতি একrr
                    সমীক্ষায় দেখা গিয়েছে
                    হায়দরাবাদের মানুষের মধ্যে ঘুমের সময় কমে যাচ্ছে। মূল কারণ একটাই, গ্যাজেট নির্ভর জীবন। স্লিপ টাইমকে গ্রাস করে নিচ্ছে স্ক্রিন টাইম।
                  </Text>

                 <Text style={[styles.bigBlue,styles.mB10 ]}> PHP Laravel Framework কি? </Text>

                 <Text style={styles.f20}>
                    PHP এবং Framework সম্পর্কে তো জানা হলো , চলুন এবার জানি Laravel কি? বর্তমানে PHP Framework গুলোর মধ্যে সবচেয়ে শক্তিশালী এবং জনপ্রিয় ফ্রেমওয়ার্ক
                    হচ্ছে Laravel। এটি একটি Opensource Secure PHP MVC Web Framework যা সেইসব ডেভেলপারদের জন্য তৈরী করা হয়েছে যাদের একটি সহজ এবং মার্জিত টুলকিট
                    প্রয়োজন যা পূর্ণ-বৈশিষ্ট্যযুক্ত ওয়েব অ্যাপ্লিকেশনগুলি তৈরি করতে পারে। বিভিন্ন অসামান্য ব ৈশিষ্ট্যগুলির জন্য এটি বিশ্বের বিভিন্ন পিএইচপি ওয়েব প্রোগ্রামারের মধ্যে
                    খুব দ্রুত জনপ্রিয় হয়ে ওঠে । ২০১১ সালে Taylor Otwel প্রথম লারাভেল ডেভেলপ করেন।
                  </Text>

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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
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






    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

