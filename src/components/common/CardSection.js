import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.contrainerStyle, props.style]}>
      {props.children}
    </View>
);

const styles = {
  contrainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
