// Packages
import axios from 'axios';

export async function geDetailByIdFromServer(id, callback) {
  await axios
    .get(`https://api.jikan.moe/v4/anime/${id}`)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error);
    });
}
