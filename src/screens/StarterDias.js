/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text } from 'react-native';

const StarterDias = ({route}) => {
  const displayName = route.params;

  return (
    <View>
      <Text>{displayName}</Text>
    </View>
  );
};

export default StarterDias;
