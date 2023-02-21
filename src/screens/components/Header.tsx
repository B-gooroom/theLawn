import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

function Header(): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  const item = {
    src: require('../../assets/img/symbol.png'),
  };
  const btn = {
    src: require('../../assets/img/menu.png'),
  };

  // const navHome = () => {
  //   // navigation.navigate('Home');
  //   console.log('nav', navigation);
  // };

  return (
    <View style={styles.sectionWrapper}>
      <TouchableOpacity
        style={styles.sectionContainer}
        // onPress={() => navigation.navigate('Home')}
      >
        <Image source={item.src} style={styles.symbol} />
      </TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Image source={btn.src} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },
  symbol: {
    width: 32,
    height: 30,
  },
  button: {
    width: 24,
    height: 24,
  },
  sectionContainer: {
    marginTop: 32,
    height: 52,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Header;
