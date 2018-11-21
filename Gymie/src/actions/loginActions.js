import * as types from './actionTypes';
import { request } from '../network';

export const login = async credentials => {
  const response = await request('http://localhost:3000/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ 
      email: "rafael.lourenco.nunes@gmail.com",
      password: "ranugrade10000"
    })
  })

  return { 
    type: types.LOGIN,
    payload: {
      token: response.data.token,
      ...response.data.user
    }
  };
}