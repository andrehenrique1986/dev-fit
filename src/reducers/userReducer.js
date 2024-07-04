/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
const initialState = {
  name: '',
  nickName: null,
  level: '', // beginner (iniciante), intermediate (intermediário), advanced (avançado)
  workoutDays: [], // 0-6 (Semana começa no domingo)
  myworkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2024-06-28', '2024-06-27'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
        return {...state, name:action.payload.name};        
    // eslint-disable-next-line no-unreachable
    break;
    case "SET_NICKNAME":
      return {...state, nickName:action.payload.nickName};
    break;
    case "SET_WORKOUTDAYS":
      return {...state, workoutDays:action.payload.workoutDays};
      break;
  }

  return state;
};
