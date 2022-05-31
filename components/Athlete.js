import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Athlete = props => {
  let img = props.image
    ? {uri: props.image}
    : {uri: 'https://i.ibb.co/2kLKNFX/pexels-frank-cone-2291874.jpg'};

  return (
    <View>
      <View style={styles.runnerContainer}>
        <Image source={img} style={styles.imgRunner} />
        <View>
          <Text style={styles.nameRunner}>{props.name}</Text>
          <Text style={styles.emailRunner}>{props.email}</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  runnerContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  imgRunner: {
    width: 64,
    height: 64,
    borderRadius: 100,
    marginRight: 10,
  },
  nameRunner: {
    fontSize: 16,
    fontWeight: '600',
  },
  emailRunner: {
    opacity: 0.5,
  },
  separator: {
    width: '100%',
    backgroundColor: 'black',
    height: 1,
    alignSelf: 'center',
  },
});

export default Athlete;
