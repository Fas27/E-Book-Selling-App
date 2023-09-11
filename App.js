import { View, Text,TextInput ,StyleSheet, TouchableOpacity,Alert,ImageBackground,Image } from 'react-native';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// This is a login user interface 
function Login({navigation}) {
function goSignup(){
    navigation.navigate('Signup');
  }
  const[email, setEmail] = useState('');
  const[Password,setPassword] = useState('');
return (
    <View style={styles.container}>
    <Text style ={{textTransform:'uppercase',textShadowOffset:2,textAlign:'center', fontSize:40,color:'#dc143c',marginTop:30,fontWeight:'bold'}}> BOOK CLUB</Text>
    
    <Image source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
            style={styles.Login_image} resizeMode="cover"/>          
  
        <TextInput  
            style={styles.inputText}
            placeholder="Username or Email ..." 
            placeholderTextColor="#003f5c"
            onChangeText={ (email) => setEmail(email)} />

        <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c" 
            secureTextEntry = {true}
            onChangeText={ (Password) => setPassword(Password)}  />


      <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('MainUI')}>
        <Text style={{textAlign:'center' ,color:'white',fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>

      <Text style={{textAlign:'center' ,marginTop:40, color :'black',fontWeight:'bold'}}>Don't have an account?</Text>
      
      <TouchableOpacity onPress ={goSignup}>
        <Text style={{textAlign:'center' ,color:'#fc5203',fontWeight:'bold'}}>Signup</Text>
      </TouchableOpacity>
     
    </View>
  );
}

function Signup({navigation}) {

  const[email, setEmail] = useState('');
  const[Password,setPassword] = useState('');
  return (

    <View style={styles.container}>
     <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image}resizeMode="cover">
      <TextInput  
            style={styles.inputTextSignup}
            placeholder="Enter Your Email " 
            placeholderTextColor="#01202e"
            onChangeText={ (email) => setEmail(email)} />
      <TextInput  
            style={styles.inputTextSignup}
            placeholder="Enter Your Password " 
            placeholderTextColor="#01202e" 
            secureTextEntry = {true}
            onChangeText={ (Password) => setPassword(Password)} 
            />
      <TextInput  
            style={styles.inputTextSignup}
            placeholder="Confirm Password" 
            placeholderTextColor="#01202e"
            secureTextEntry = {true}
            onChangeText={ (Password) => setPassword(Password)} />
      
      <TouchableOpacity  onPress ={() => Alert.alert("You've created an account succesfully....!")}>
        <Text style={styles.text_button}>Creat Account</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress ={() => navigation.navigate('Login')}>
        <Text style={styles.text_button}>Sign IN</Text>
      </TouchableOpacity>
      </ImageBackground>     

    </View>
  )}


function MainUI({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          
                <TouchableOpacity onPress ={() => navigation.navigate(' CATEGORIES')}>
                    <Text style={styles.text_button1}>CATEGORIES LIST</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('Login')}>
                    <Text style={styles.text_button2}>BOOK LIST</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('Login')}>
                    <Text style={styles.text_button3}>NOTIFICATION</Text>
                </TouchableOpacity>

                
         
          </ImageBackground>
         
    </View>

)}

function CATEGORIES({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          
                <TouchableOpacity onPress ={() => navigation.navigate('Horror')}>
                    <Text style={styles.text_button4}>Action Advanture</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('Classics')}>
                    <Text style={styles.text_button4}>Classics</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('fantasy')}>
                    <Text style={styles.text_button4}>Comic Book or Graphic Novel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('Thrillers')}>
                    <Text style={styles.text_button4}>Horror</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('Historicalfiction')}>
                    <Text style={styles.text_button4}>Literary Fiction</Text>
                </TouchableOpacity>

            </ImageBackground>
         
    </View>

)}


function Horror({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book type : '
            
            placeholderTextColor="#2e0447" />

         <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book Title : '
            placeholderTextColor="#2e0447" />
          
         
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = ' Enter book Author: '
            placeholderTextColor="#2e0447" />

                
                <TouchableOpacity onPress ={() => navigation.navigate('MainUI')}>
                    <Text style={styles.text_button}>Search</Text>
                </TouchableOpacity>

          </ImageBackground>
         
    </View>

)}

function Classics({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book type : '
            
            placeholderTextColor="#2e0447" />

         <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Book Title  : '
            placeholderTextColor="#2e0447" />
          
         
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Book Author : '
            placeholderTextColor="#2e0447" />

                
                <TouchableOpacity onPress ={() => navigation.navigate('MainUI')}>
                    <Text style={styles.text_button}>Search</Text>
                </TouchableOpacity>

          </ImageBackground>
         
    </View>

)}
function Historicalfiction ({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book type : '
            
            placeholderTextColor="#2e0447" />

         <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Title  : '
            placeholderTextColor="#2e0447" />
          
         
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = ' Enter Author: '
            placeholderTextColor="#2e0447" />

                
                <TouchableOpacity onPress ={() => navigation.navigate('MainUI')}>
                    <Text style={styles.text_button}>Search</Text>
                </TouchableOpacity>

          </ImageBackground>
         
    </View>

)}

function Thrillers({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book type : '
            
            placeholderTextColor="#2e0447" />

         <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Title  : '
            placeholderTextColor="#2e0447" />
          
         
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Author : '
            placeholderTextColor="#2e0447" />

                
                <TouchableOpacity onPress ={() => navigation.navigate('MainUI')}>
                    <Text style={styles.text_button}>Search</Text>
                </TouchableOpacity>

          </ImageBackground>
         
    </View>

)}

function fantasy({navigation}){
  return(
    <View style ={styles.Main_UI_Style}>
          <ImageBackground source={{uri: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg' }}
             style={styles.image} resizeMode="cover">
          
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter book type : '
            
            placeholderTextColor="#003f5c" />

         <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Title : '
            placeholderTextColor="#003f5c" />
          
         
          <TextInput  
            style={styles.inputTextSignup}
            placeholder = 'Enter Author : '
            placeholderTextColor="#003f5c" />

                
                <TouchableOpacity onPress ={() => navigation.navigate('MainUI')}>
                    <Text style={styles.text_button}>Search</Text>
                </TouchableOpacity>

          </ImageBackground>
         
    </View>

)}

const Stack = createNativeStackNavigator();


function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen  
            name="Login" 
            component={Login} 
            options={{ title: 'Welcome',textAlign:'center',headerShown:false  }}/>
          <Stack.Screen 
            name="Signup" 
            component={Signup}
            options={{ textAlign:'center',headerShown:false  }} />
          <Stack.Screen 
            name = "MainUI" 
            component= {MainUI}
            options ={{title:'Books are a uniquely portable magic',}} />
          
          <Stack.Screen 
            name = " CATEGORIES" 
            component= { CATEGORIES}
            options ={{title:'Select Book category you want !',}} />
          
          <Stack.Screen 
            name = "Horror" 
            component= {Horror}
            options ={{title:'Horror',}} />

          <Stack.Screen 
            name = "Classics" 
            component= {Classics}
            options ={{title:'Classics',}} />

          <Stack.Screen 
            name = "fantasy" 
            component= {fantasy}
            options ={{title:'fantasy',}} />
          
          <Stack.Screen 
            name = "Thrillers" 
            component= {Thrillers}
            options ={{title:'Thrillers',}} />

           <Stack.Screen 
            name = "Historicalfiction" 
            component= {Historicalfiction}
            options ={{title:'Historicalfiction',}} />
      
      
      
      
      </Stack.Navigator>
      
     
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    
  },
  inputText:{
    padding:10,
    backgroundColor:'white',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginVertical:20,
    marginTop:10,
    borderColor: '#dc143c',
    borderWidth: 2,
    borderRadius:30

 },
 inputTextSignup:{
  padding:10,
  backgroundColor:'white',
  justifyContent:'space-between',
  marginTop:60,
  width:"80%",
  marginHorizontal:20,
  borderWidth:2,
  borderColor:'black',
  borderRadius:20


 },

 text_button:{
    fontSize:20,
    textAlign:'center' ,
    color:'black', 
    padding:20,
    backgroundColor:'#dc143c',
    marginHorizontal:80,
    justifyContent:'space-evenly',
    marginVertical:20,
    fontWeight:'bold',
    color:'#003f5c',
    borderRadius:20,
    borderWidth:2,
    marginLeft:50
 },

 text_button1:{
  marginTop:100,
  fontSize:20,
  textAlign:'center' ,
  color:'black', 
  padding:20,
  backgroundColor:'#dc143c',
  marginHorizontal:80,
  justifyContent:'space-evenly',
  marginVertical:20,
  fontWeight:'bold',
  color:'#003f5c',
  borderRadius:20,
  borderWidth:2,
  marginLeft:50
  },

  text_button2:{
    marginTop:50,
    fontSize:20,
    textAlign:'center' ,
    color:'black', 
    padding:20,
    backgroundColor:'#dc143c',
    marginHorizontal:80,
    justifyContent:'space-evenly',
    marginVertical:20,
    fontWeight:'bold',
    color:'#003f5c',
    borderRadius:20,
    borderWidth:2,
    marginLeft:50
    },

    text_button3:{
      marginTop:50,
      fontSize:20,
      textAlign:'center' ,
      color:'black', 
      padding:20,
      backgroundColor:'#dc143c',
      marginHorizontal:80,
      justifyContent:'space-evenly',
      marginVertical:20,
      fontWeight:'bold',
      color:'#003f5c',
      borderRadius:20,
      borderWidth:2,
      marginLeft:50
      },

      text_button4:{
        fontSize:20,
        textAlign:'center' ,
        color:'black', 
        padding:20,
        backgroundColor:'#dc143c',
        marginHorizontal:80,
        justifyContent:'space-evenly',
        marginVertical:20,
        fontWeight:'bold',
        color:'#003f5c',
        borderRadius:20,
        borderWidth:2,
        marginLeft:50
     },

 Main_UI_Style:{
 
   backgroundColor:'white'
   
 },
 topic:{
   marginTop:60,
   borderRadius: 30,
 },
 login_button:{
   width:"50%",
   height:50,
   borderRadius:25,
   backgroundColor:"#dc143c",
   marginTop:40,
   justifyContent:'center',
   marginHorizontal:85,
   

 },
 image:{
  width: 400, 
  height: 700,
  
 },
 Login_image:{
  width: 200, 
  height: 200,
  marginTop:50,
  alignItems:'center',
  marginHorizontal:80
 },
 

 })
export default App;
