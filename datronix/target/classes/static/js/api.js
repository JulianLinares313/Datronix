// js/api.js
const API_BASE = 'http://localhost:8080/api';

export async function getData(endpoint) {
    const response = await fetch(`${API_BASE}${endpoint}`);
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    return response.json();
}

export async function postData(endpoint, data) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response.json();
}

export async function putData(endpoint, data) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response.json();
}

export async function deleteData(endpoint) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error ${response.status}`);
    }
    return response;
}