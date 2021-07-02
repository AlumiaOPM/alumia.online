
export default function webinarReducer(state = false, action){
  switch (action.type){
    case "open":
      return { state:true, data: action.data };

    case "close":
      return { state:false, data:[] };
    
    default:
      return state;
  }
}
