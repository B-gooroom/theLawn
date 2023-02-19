import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}: any): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  return (
    <View>
      <View style={styles.sectionHead}>
        <View style={styles.sectionBorder}>
          <Text style={styles.sectionTitle}>fri</Text>
        </View>
        <View style={styles.sectionBorder}>
          <Text style={styles.sectionTitle}>Feb</Text>
        </View>
        <View style={styles.sectionBorderright}>
          <Text
            style={styles.sectionButton}
            onPress={() => navigation.navigate('Back')}>
            diary
          </Text>
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
  sectionHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionBorder: {
    // height: 24,
    marginTop: 24,
    marginBottom: 24,
    borderRightWidth: 1,
    borderRightColor: '#212121',
  },
  sectionBorderright: {
    // height: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 2,
    paddingLeft: 24,
    paddingRight: 24,
  },
  sectionButton: {
    fontSize: 24,
    color: 'green',
    fontWeight: '600',
    padding: 2,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default HomeScreen;
