/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// function HomeScreen({navigation}: any): JSX.Element {
function HomeScreen(): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.sectionWrapper}>
        <View style={{marginTop: 60}}>
          <Text style={{textAlign: 'center', fontSize: 22}}>seoul 3'c</Text>
          <View
            style={{
              width: 107,
              height: 87,
              borderStyle: 'solid',
              borderWidth: 1,
              marginTop: 30,
            }}
          />
        </View>
        <View>
          <Text style={styles.sectionMain}>19</Text>
        </View>
        <View style={styles.sectionHead}>
          <View style={styles.sectionBorderright}>
            <Text style={styles.sectionTitle}>fri</Text>
          </View>
          <View style={styles.sectionBorder}>
            <Text style={styles.sectionTitle}>Feb</Text>
          </View>
          {/* <View style={styles.sectionBorderright}>
          <Text
            style={styles.sectionButton}
            onPress={() => navigation.navigate('Back')}>
            diary
          </Text>
        </View> */}
        </View>
      </View>
      {/* <Button
        title="Press me"
        // onPress={() => useLinkTo}
        onPress={() => navigation.navigate('Back')}
      /> */}
      {/* <Text style={styles.sectionTitle}>home</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    // borderColor: 'pink',
    // borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // elevation: 5,
    margin: 30,
    width: 300,
    height: 550,
    display: 'flex',
    // justifyContent: 'center',
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
    // height: 24,
    marginTop: 24,
    marginBottom: 24,
    borderLeftWidth: 1,
    borderLeftColor: '#212121',
  },
  sectionBorderright: {
    // height: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    // padding: 2,
    paddingLeft: 50,
    paddingRight: 50,
  },
  sectionButton: {
    fontSize: 24,
    color: 'green',
    fontWeight: '600',
    padding: 2,
    paddingLeft: 24,
    paddingRight: 24,
  },
  sectionMain: {
    fontSize: 200,
    lineHeight: 244,
    color: '#212121',
    fontWeight: '300',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    // height: 244,
    // width: 196,
  },
});

export default HomeScreen;
