import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID MT2W1UtfaJLD8PgXGt9fZyaGlZTbfsL09zum1elrQuY",
      },
})

