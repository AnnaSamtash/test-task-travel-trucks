import axios from 'axios';

export async function postRequest(data) {
  const response = await axios.post('/api/requests', data);
  return response.data;
}
