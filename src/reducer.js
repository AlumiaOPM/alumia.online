
export default function reducer(state = false, action){
  switch (action.type){
    case "openPopup":
      return state = true;

    case "closePopup":
      return state = false;
    
    default:
      return state;
  }
}
