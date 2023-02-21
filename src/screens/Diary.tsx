import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DiaryScreen({navigation}: any): JSX.Element {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#c9cdd2',
  // };

  return (
    <View>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>fri</Text>
        <Text style={styles.sectionTitle}>Feb</Text>
        <Text
          style={styles.sectionButton}
          onPress={() => navigation.navigate('Home')}>
          홈
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 12,
  },
  sectionButton: {
    fontSize: 24,
    color: 'green',
    fontWeight: '600',
    padding: 12,
  },
});

export default DiaryScreen;
