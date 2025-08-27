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

function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

function deleteItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
}

export { getItems, addItem, deleteItem };
