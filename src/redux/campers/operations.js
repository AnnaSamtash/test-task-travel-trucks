import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const fetchCampersData = async (params, thunkAPI) => {
  try {
    const searchParams = new URLSearchParams(params);
    const response = await axios.get(`/campers?${searchParams}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  fetchCampersData
);

export const addCampers = createAsyncThunk(
  'campers/addCampers',
  fetchCampersData
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
