
import {updateuser} from "../dispatch/update.js"

export default function Reactjs(state="",action){
  switch(action.type){
    case updateuser:
    return action.payload
    default:
    return state
  }
}
