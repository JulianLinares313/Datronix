// js/api.js - Comunicación con el backend de Spring Boot

// URL base de tu backend (cambia si está en otro puerto)
const API_BASE = 'http://localhost:8080/api';

// Función para obtener headers (con autenticación si la tienes)
function getHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
}

// ========== MÉTODOS GENÉRICOS ==========

// GET
export async function getData(endpoint) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'GET',
        headers: getHeaders()
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response.json();
}

// POST
export async function postData(endpoint, data) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response.json();
}

// PUT
export async function putData(endpoint, data) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response.json();
}

// DELETE
export async function deleteData(endpoint) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'DELETE',
        headers: getHeaders()
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response;
}