import { Text, View, Image, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';

import Style from '../style/style';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPurchaseSuccessful, setPurchaseSuccessful] = useState(false);

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const handleYes = () => {
    setModalVisible(false);
    setPurchaseSuccessful(true);
  };

  const handleNo = () => {
    setModalVisible(false);
  };
  const handlePay = () => {
    setPurchaseSuccessful(false);
  }


  const { email } = route.params;
  return (
    <SafeAreaView style={[Style.maxScreen, { backgroundColor: '#F4E1E1' }]}>
      <View style={[Style.Flex_row, Style.Flex_Between, { marginTop: 10 }]}>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: 100, height: 30, backgroundColor: 'silver' }}>
          <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image source={require('../img/settings.jpg')} style={{ height: 60, width: 60, borderRadius: 100 }}></Image>
        </TouchableOpacity>
      </View>
      <View style={[Style.maxScreen, { paddingTop: 100, alignItems: 'center', gap: 30 }]}>
        <View style={[{ width: '100%' }, Style.Flex_Center]}>
          <Text style={[Style.FS_1]}>Xin chào: {email}</Text>
        </View>
        <View style={[{ width: '80%', borderWidth: 1, borderColor: 'blue', height: '70%', borderRadius: 30, backgroundColor: 'white', padding: 30 }, Style.Flex_Center, Style.Flex_Between]}>
          <ScrollView showsVerticalScrollIndicator={false} overflow style={[{ width: '100%',flex:1 }]}>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'silver', marginVertical: 20 }}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 'bold', fontStyle: "italic" }}>Buổi hòa nhạc Modal Talking</Text>
              <View style={[{ width: '90%', marginVertical: 20, height: "8%", alignItems: 'center', gap: 30, padding: 15 }, Style.Flex_row]}>
                <Image source={require('../img/ticket.png')} style={{ width: 40, height: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#9bcefa' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={{ borderWidth: 1, padding: 5, borderRadius: 10, width: "30%", height: 40, backgroundColor: '#52cb52' }}>
                  <Text style={[{ textAlign: 'center' }, Style.text_Bold]}>Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={Style.modalContainer}>
          <View style={[{ width: 300, height: 100, backgroundColor: 'whitesmoke', borderRadius: 10, borderWidth: 1, gap: 30 }, Style.Flex_Center]}>
            <Text>Bạn có muốn mua hàng không?</Text>
            <View style={[Style.Flex_row, Style.Flex_Between, { width: '40%', alignItems: 'center' }]}>
              <TouchableOpacity onPress={handleYes}><Image source={require('../img/allow.png')} style={{ width: 30, height: 30 }}></Image></TouchableOpacity>
              <TouchableOpacity onPress={handleNo}><Image source={require('../img/close.png')} style={{ width: 30, height: 30 }}></Image></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPurchaseSuccessful}
        onRequestClose={() => setPurchaseSuccessful(false)}>
        <Pressable style={Style.maxScreen} onPress={handlePay}>
          <View style={Style.modalContainer}>
            <View style={[{ width: 300, height: 100, backgroundColor: '#68e7b8', borderRadius: 10, borderWidth: 1, gap: 30 }, Style.Flex_Center]}>
              <Text>Chúc mừng! Bạn đã mua hàng thành công.</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView >
  );
}






