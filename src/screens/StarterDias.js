/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from "../components/DefaultButton";
import { Text } from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const NextButton = styled.Button``;

const BoldText = styled.Text`
  font-weight: bold;
`; 

const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
// eslint-disable-next-line prettier/prettier

const Page = (props) => {
  
  let firstName = props.name.split(' ')[0];
  let displayName = props.nickName ? props.nickName : firstName;

  const nextAction = () => {
    if (!props.workoutDays || props.workoutDays.length === 0) {
      alert('Você precisa treinar pelo menos um dia');
      return;
    } else {
      props.navigation.navigate('StarterNivel');
    }
  };

  const toggleDay = (d) => {
    let newWorkoutDays = [...props.workoutDays];
    if (!props.workoutDays.includes(d)) {
      //inserir
      newWorkoutDays.push(d);
    } else {
      //remover
      newWorkoutDays = newWorkoutDays.filter(i => i != d);
    }
    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({workoutDays: newWorkoutDays});
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerRight: () => <NextButton title="Próximo" onPress={nextAction} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [props.navigation, nextAction]);

  return (
    <Container>
      <HeaderText> Opa, <BoldText>{displayName}</BoldText>, tudo bem? </HeaderText>
      <HeaderText>Quais os <BoldText>dias da semana</BoldText> você pretende treinar?</HeaderText>
        <DaysArea>
              <DefaultButton bgcolor={props.workoutDays.includes(1)? '#A5E8BC': false} onPress={() => toggleDay(1)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Segunda</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(2)? '#A5E8BC': false} onPress={() => toggleDay(2)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Terça</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(3)? '#A5E8BC': false} onPress={() => toggleDay(3)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Quarta</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(4)? '#A5E8BC': false} onPress={() => toggleDay(4)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Quinta</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(5)? '#A5E8BC': false} onPress={() => toggleDay(5)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Sexta</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(6)? '#A5E8BC': false} onPress={() => toggleDay(6)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Sábado</Text>
              </DefaultButton>
              <DefaultButton bgcolor={props.workoutDays.includes(0)? '#A5E8BC': false} onPress={() => toggleDay(0)} width={100} style={{marginBottom: 20}} underlayColor="#DDD">
                  <Text>Domingo</Text>
              </DefaultButton>
        </DaysArea>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  name: state.userReducer.name,
  nickName: state.userReducer.nickName,
  workoutDays: state.userReducer.workoutDays,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
  setNickName: (nickName) => dispatch({type: 'SET_NICKNAME', payload: {nickName}}),
  setWorkoutDays: (workoutDays) => dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
