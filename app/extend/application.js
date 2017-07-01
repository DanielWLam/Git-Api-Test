const axios = require('axios');
module.exports = {
    // get (url, query) {
    //   return new Promise(resolve, reject) {
    //     axios.get(url, data).then(res => {
    //       resolve(res)
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   }
    // },
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, {
        headers: {
          Accept: 'application/json'
        }
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  }
}