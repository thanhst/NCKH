import { Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Style from '../style/style'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Ticket({navigation}) {
  return (
    <SafeAreaView style={[Style.maxScreen, { backgroundColor: '#F4E1E1' }]}>
      <View style={[Style.Flex_row, Style.Flex_Between, { marginTop: 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../img/back.png')} style={{ height: 60, width: 60, borderRadius: 100 }}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image source={require('../img/settings.jpg')} style={{ height: 60, width: 60, borderRadius: 100}}></Image>
        </TouchableOpacity>
      </View>
      <View style={[Style.Flex_Center]}>
        <Text>Cái này chỉ là để thử nghiệm thôi</Text>
      </View>
    </SafeAreaView>
  )
}

