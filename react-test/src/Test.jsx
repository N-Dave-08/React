import React, { useReducer } from 'react'
import { postReducer } from './postReducer'
import { ACTION_TYPES } from './postActionTypes';

const initialState = { count: 0 };

export const Test = () => {

  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>plus</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>minus</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.RESET })}>reset</button>
    </div>
  )
}
