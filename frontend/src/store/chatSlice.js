import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: {},
    errors: null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
      fetchChatData: (state, action) => ({
          ...state,
          data: action.payload
      }),
      fetchErrors: (state, action) => ({
          ...state,
          errors: action.payload
      }),
      updateMessagesState: (state, action) => ({
          ...state,
          data: {
              ...state.data,
              messages: [...state.data.messages, action.payload]
          }
      }),
 
  },
})

// Action creators are generated for each case reducer function
export const { fetchChatData,  fetchErrors, updateMessagesState  } = chatSlice.actions;
export const chatStore = state => state.chat;



export const getChatData = () => async (dispatch) => {

    const token = localStorage.getItem('auth');

    try  {
        const response = await axios.get(`/api/v1/data`, { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(fetchChatData(response.data));
    } catch(e) {
        dispatch(fetchErrors(e))
    }

}

export default chatSlice.reducer