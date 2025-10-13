const baseUrl = "http://localhost:3001";

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(item, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return request(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify(item),
  });
}

function deleteItem(id, token) {
  const headers = {};

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers,
  });
}

function addCardLike(id, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers,
  });
}

function removeCardLike(id, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers,
  });
}

export { getItems, addItem, deleteItem, addCardLike, removeCardLike };
