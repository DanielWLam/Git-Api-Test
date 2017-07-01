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
  $post(url, data, headers) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, Object.assign({}, {
          headers: {
            Accept: 'application/json'
          }
        }, headers))
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
