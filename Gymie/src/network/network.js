export const request = async (url, body) =>  {
    let response = await fetch(url, body)   
    .catch((error) => {
      return error
    });

    return response.json();
}