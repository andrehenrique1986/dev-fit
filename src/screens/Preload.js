/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';

const Preload = (props) => {

  const navigation = useNavigation();
  
  // Temporário 
  useEffect(() => {
    navigation.dispatch(
      StackActions.replace('StarterStack', { index: 0 })
  );
  }, []);

  // useEffect(() => {
    
  //   if (!props.name) {
  //     
  //     navigation.dispatch(StackActions.replace('StarterStack', { index: 0 }));
  //   } else {
  //     
  //     navigation.dispatch(StackActions.replace('AppTab', { index: 0 }));
  //   }
  // }, [props.name, navigation]);

  return null;
};
  
const mapStateToProps = (state) => {
  return {
    name:state.userReducer.name,
    nickName:state.userReducer.nickName,
  };
};

export default connect(mapStateToProps)(Preload);
