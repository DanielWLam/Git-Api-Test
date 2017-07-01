const axios = require('axios');
// const utils = require('../utils/utils.js')
module.exports = {
  // get(url, query) {
  //   // let queryString = utils.queryStringify(query);
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(url)
  //       .then(res => {
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  // },
  $post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  $get(url, headers) {
    return new Promise((resolve, reject) => {
      axios.get(url, headers).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
};
