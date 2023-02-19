import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header(): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  return (
    <View style={styles.sectionWrapper}>
      <Text style={styles.sectionContainer}>잔디</Text>
      <Text style={styles.sectionContainer}>햄버거</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    // borderColor: 'blue',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },
  sectionContainer: {
    marginTop: 32,
    height: 52,
    // borderWidth: 1,
    // borderColor: '#000',
    fontSize: 16,
    // lineHeight: 24,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Header;
