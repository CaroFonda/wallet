import axios from 'axios';

export function getAddresses() {
    return async function(dispatch) {
        const response = await axios.get('http://localhost:3001/addresses');
        return dispatch({
            type: 'GET_ADDRESSES',
            payload: response.data
        });
    }
};

export function getOneAddress(address) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/addresses?address=${address}`);
            return dispatch({
                type: 'GET_ONE_ADDRESS',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const addToFavorites = (account) => {
    return {
      type: "ADD_TO_FAVORITES",
      payload: account,
    };
  };
  
  export const removeFromFavorites = (account) => {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: {
        account,
      } 
    };
  };