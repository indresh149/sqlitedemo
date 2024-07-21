import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
//import VIForegroundService from '@voximplant/react-native-foreground-service';

const Services = () => {
//   useEffect(() => {
//     createChannel();
//   }, []);

//   const createChannel = async () => {
//     const channelConfig = {
//       id: 'channelId',
//       name: 'Channel name',
//       description: 'Channel description',
//       enableVibration: false,
//     };
//     await VIForegroundService.getInstance().createNotificationChannel(
//       channelConfig,
//     );
//   };

//   const startForegroundService = async () => {
//     const notificationConfig = {
//       channelId: 'channelId',
//       id: 3456,
//       title: 'Title',
//       text: 'Some text',
//       icon: 'ic_icon',
//       button: 'Some text',
//     };
//     try {
//       await VIForegroundService.getInstance().startService(notificationConfig);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const stopForegroundService = async () => {
//     await VIForegroundService.getInstance().stopService();
//   }

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
         //   startForegroundService();
        }}>
        <Text style={{color: '#fff'}}>Start foreground service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
         //   stopForegroundService();
        }}>
        <Text style={{color: '#fff'}}>Stop foreground service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 100,
          borderRadius: 20,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: '#fff'}}>Start background service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: '#fff'}}>Start background service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Services;
