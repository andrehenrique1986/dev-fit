/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #FFF;
  margin-left: 30px;
  margin-right: 30px;
`;

const HeaderText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const NameInput = styled.TextInput`
  border: 1px solid #CCC;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const NextButton = styled.Button`
`;

const Page = (props) => {

  

  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome');
      return;
    } else {
      props.navigation.navigate('StarterDias');
    }
  };

  const handleChangeName = (t) => {
    props.setName(t);
    props.navigation.setParams({ name: t });
  };

  const handleChangeNickName = (t) => {
    props.setNickName(t);
    props.navigation.setParams({ nickName: t });
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <NextButton title="Próximo" onPress={nextAction}/>
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [props.navigation, nextAction]);
  return (
    <Container>
      <HeaderText>Qual é o seu nome completo ?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
      <HeaderText>Como você gostaria de ser chamado ?</HeaderText>
      <NameInput
        value={props.nickName}
        onChangeText={handleChangeNickName}
        autoCapitalize="words"
      />  
    </Container>
  );
};


const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    nickName: state.userReducer.nickName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
    setNickName: (nickName) => dispatch({ type: 'SET_NICKNAME', payload: { nickName } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);


