const initialState = {
  persons: []
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(), // not really unique but good enough here!
          name: 'Max',
          age: Math.floor( Math.random() * 40 )
        })
      }
    case 'DELETE_PERSON':
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.value)}
      }
  return state;
}

export default reducer;