import { BASE_SERVER_URI } from "./constants"

class API {
  fetch(path){
    let url = `${BASE_SERVER_URI}/${path}`;
    let request = new XMLHttpRequest();

    return new Promise( (resolve, reject) => {

      request.open("GET", url, true);
      
      request.onload = () => {
        if(request.status >= 200 && request.status < 400){
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = (error) => {
        reject(error);
      };

      request.send();
    });
  }
}

export let api = new API();