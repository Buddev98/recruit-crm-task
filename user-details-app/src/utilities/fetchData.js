export default async function fetchData(url, method, data) {
  let response;
  if(method === 'GET') {
    response = await fetch(url);
  }

  if(method === 'PATCH') {
    response = await fetch(url, {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    });
  }

  return response;
}

