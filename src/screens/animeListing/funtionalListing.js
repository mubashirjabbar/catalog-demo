// Packages
import axios from 'axios';

export async function getListingFromServer(page, newStatus, callback) {
  await axios
    .get(`https://api.jikan.moe/v4/anime?page=${page}&status=${newStatus}`)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error);
    });
}
