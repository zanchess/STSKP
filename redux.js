const redux = require('redux');

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1,
      };
    case 'SUB':
      return {
        counter: state.counter - 1,
      };
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.value,
      };

    default: return state;
  }
};

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log('Subscribe', store.getState());
});

store.dispatch({ type: 'ADD' });

store.dispatch({ type: 'SUB' });

store.dispatch({ type: 'ADD_NUMBER', value: 4 });
