import { initState as inituser } from '../actions/inituser'

export function user( state = inituser, action){
  switch(action.type){
    case "onCheck" :
      let onCheckState = state;
      return onCheckState = action.payload
  }
  return user
}