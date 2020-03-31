import { urls } from "../helpers/urls";

export async function fetchStatusJson() {
  const response = await fetch(urls.statusJsonUrl);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(response.status);
  }
}

export async function fetchRegionsIds() {
  const response = await fetch(urls.regionsIds);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(response.status);
  }
}

export async function fetchSystemIds(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(response.status);
  }
}

export async function fetchTypesIds(page) {
  const response = await fetch(urls.typesIdsUrl + `&page=${page}`);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(response.status);
  }
}

// Resolve a set of names to IDs
export async function fetchItemNameAndId(listOfNames) {
  return fetch(urls.itemsNameToIdUrl, {
    method: "POST",
    body: JSON.stringify(listOfNames),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(rawResponse => rawResponse.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      err => console.log("błąd przy pobieraniu id");
      throw new Error(err);
    });
}
