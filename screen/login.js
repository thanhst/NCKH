import { StatusBar, View, Text, ImageBackground, TouchableOpacity, Button, Image, Dimensions, TouchableHighlight, TextInput } from 'react-native'
import React, { useState } from 'react'
import Style from '../style/style'
import { SafeAreaView } from 'react-native-safe-area-context';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Login({ navigation }) {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getEmail,setEmail]=useState("");
  return (
    <ImageBackground style={Style.maxScreen} source={require('../img/Frame1.png')} resizeMode='stretch'>
      <View style={[Style.maxScreen, Style.Color_White, Style.Flex_Center, Style.Gap_0, { paddingTop: 200 }]}>
        <View style={{ position: "relative" }}><Image source={require('../img/ticket.gif')} style={{ width: 0.3 * windowWidth, height: 0.2   * windowHeight }}></Image></View>
        <View style={[{ width: '100%', height: 200, borderWidth: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }, Style.Gap_1]}>
          <View style={[Style.Flex_row, Style.Gap_0, Style.Flex_Between, , { width: '90%' }]}>
            <Text style={[Style.Color_Black, Style.FS_1]}>Email : </Text>
            <TextInput style={[{ width: 200, backgroundColor: 'white', borderWidth: 1, paddingLeft: 10, fontSize: 22, }]}
            autoCapitalize='none'
            value={getEmail}
            onChangeText={setEmail}></TextInput>
          </View>
          <View style={[Style.Flex_row, Style.Gap_0, Style.Flex_Between, { width: '90%' }]}>
            <Text style={[Style.Color_Black, Style.FS_1]}>Password : </Text>
            <View style={[Style.Flex_row]}>
              <TextInput style={[{ width: 200, backgroundColor: 'white', borderWidth: 1, paddingLeft: 10, fontSize: 22, paddingRight: 40 }]} autoCapitalize='none'
                secureTextEntry={getPasswordVisible ? false : true}></TextInput>
              <TouchableOpacity onPress={()=>setPasswordVisible(!getPasswordVisible)}>
                {getPasswordVisible?
                <Image source={require('../img/visible.png')} style={{ height: 30, width: 40, position: 'absolute', right: 0 }} resizeMode='contain'></Image>:
                <Image source={require('../img/invisible.png')} style={{ height: 30, width: 40, position: 'absolute', right: 0 }} resizeMode='contain'></Image>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[Style.Flex_Center, Style.Flex_row, { width: '100%', paddingTop: 60 }, Style.Gap_0]}>
          <TouchableOpacity title='Sign in' style={Style.Button}
            onPress={() => navigation.navigate('Tabs',{email:getEmail})}>
            <Text style={[Style.Color_White, Style.FS_0]}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity title='Sign in by GG' style={Style.Button}
            onPress={() => navigation.navigate('Tabs',{email:getEmail})}>
            <Text style={[Style.Color_White, Style.FS_0, { textAlign: 'center' }]}>Đăng nhập bằng Google</Text>
          </TouchableOpacity>
        </View>
        <View style={[Style.Flex_row]}>
          <Text>Chưa có tài khoản ? </Text>
          <TouchableHighlight onPress={() => navigation.navigate('Login')} underlayColor='transparent'>
            <Text style={{ color: '#006ece' }}>Tạo tài khoản ngay !</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  )
}