/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}: any): JSX.Element {
  // function HomeScreen(): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  const weather = {
    src: require('../assets/img/weather.jpg'),
  };
  const diary = {
    src: require('../assets/img/create.jpg'),
  };
  const [user, setUser] = useState<any>({});
  console.log('user', user);

  const getResponse = async () => {
    try {
      //응답 성공
      const response = await axios.get('http://localhost:8080/api/v1/users');
      console.log('res/Home', response.data.users);
      setUser(response.data.users[0]);
      // console.log(response.data[0]);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionButton}>
          <Text onPress={() => navigation.navigate('Diary')}>
            <Image source={diary.src} style={styles.btnWrapper} />
          </Text>
        </View>
        <View style={{marginTop: 18}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'montserrat-Light',
            }}>
            Seoul 3℃
          </Text>
          {/* <Text>{user.userName}</Text> */}
          <View style={{marginTop: 30}}>
            <Image source={weather.src} style={styles.weatherImg} />
          </View>
        </View>
        <View style={{height: 200, marginBottom: 24, marginTop: 12}}>
          {/* <View> */}
          <Text style={styles.sectionMain}>19</Text>
        </View>
        <View style={styles.sectionHead}>
          <View style={styles.sectionBorderright}>
            <Text style={styles.sectionTitle}>Thu</Text>
          </View>
          <View style={styles.sectionBorder}>
            <Text style={styles.sectionTitle}>Feb</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: 30,
    width: 300,
    maxHeight: 550,
    height: 550,
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  sectionHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBorder: {
    marginTop: 16,
    // marginBottom: 24,
    borderLeftWidth: 1,
    borderLeftColor: '#212121',
  },
  sectionBorderright: {
    marginTop: 16,
    // marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'montserrat-Light',
  },
  sectionButton: {
    marginLeft: 'auto',
    paddingTop: 24,
    paddingRight: 24,
    position: 'relative',
  },
  btnWrapper: {
    width: 18,
    height: 18,
  },
  sectionMain: {
    fontSize: 200,
    color: '#212121',
    fontFamily: 'montserrat-Regular', //400
  },
  weatherImg: {
    width: 107,
    height: 87,
  },
});

export default HomeScreen;
