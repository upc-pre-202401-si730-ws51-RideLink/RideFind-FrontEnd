import axios from 'axios';

// URL de la API
const API_BASE_URL = 'https://my-json-server.typicode.com/upc-pre-202401-si730-ws51-RideLink/RideFind-FakeAPI';

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-type': 'application/json' }
});

export async function obtenerVehiculos() {
  try {
    const response = await http.get('/vehiculos');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los vehículos');
    }

    return data.vehiculos; // Ajusta esto según la estructura de tu JSON
  } catch (error) {
    console.error('Error al obtener datos de vehículos:', error);
    return null;
  }
}


export async function obtenerUsuarios() {
  try {
    const response = await http.get('/');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los usuarios');
    }
    const data = response.data;
    return data.usuarios; // Ajusta esto según la estructura de tu JSON
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
    return null;
  }
}

export default http;
