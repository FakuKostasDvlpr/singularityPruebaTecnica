import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

function handleError(error) {
  if (error.response) {
    throw new Error(error.response.data.error || 'Error en la solicitud');
  } else if (error.request) {
    throw new Error('No se recibió respuesta del servidor');
  } else {
    throw new Error('Error al configurar la solicitud');
  }
}

export async function login(email, password) {
  try {
    const response = await apiClient.post('/login', { email, password });
    return response.data.token;
  } catch (error) {
    handleError(error);
  }
}

export async function register(email, password) {
  try {
    const response = await apiClient.post('/register', { email, password });
    return response.data.token;
  } catch (error) {
    handleError(error);
  }
}

export async function logout() {
  try {
    await apiClient.post('/logout');
    localStorage.removeItem('token');
  } catch (error) {
    handleError(error);
  }
}
