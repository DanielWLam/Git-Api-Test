$(document).ready(function () {
  $.ajax({
    url: 'https://api.github.com/users/DanielWLam',
    type: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json'
      // Authorization: 'bearer 93a2fab04d92377cd40ff3a64a0e97d6ac53eacd'
    },
    // data: {
    //   query: JSON.stringify({"query": "{viewer {login name}}"})
    // },
    success: function (res) {
      console.log(res)
    },
    error: function (err) {
      console.log(err)
    }
  })
})