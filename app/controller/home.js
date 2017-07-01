'use strict';
// const GithubApi = require('github');
// const github = new GithubApi({
//   debug: true,
//   protocol: 'https',
//   host: 'api.github.com',
//   pathPrefix: '/api/v3',
//   Promise: require('bluebird'),
//   followRedirects: false,
//   timeout: 5000
// })
const clientId = '3712b4d55fd92f7f6a0f';
const clientSecret = '5bd9f7dd6d8aed4a5329503ed90297d2af336660';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * githubcallback() {
      const { ctx, app } = this;
      const code = ctx.query.code;
      const data = {
        method: 'POST',
        dataType: 'json',
        client_id: clientId,
        client_secret: clientSecret,
        code,
      };
      // const result = yield app.curl(
      //   'https://github.com/login/oauth/access_token',
      //   data
      // );
      let result = yield app.$post(
        'https://github.com/login/oauth/access_token',
        data
      );
      result = result.data
      console.log(result, '===')
      let access_token = result.access_token;
      let authResult
      if (this.hasScope(result.scope, 'user')) {
        authResult = yield app.$get('https://api.github.com/user', {
          headers: {
            "Authorization": `${result.token_type} ${access_token}`
          }
        })
        console.log(authResult, '===')
      }
      ctx.body = authResult.data;
    }
    hasScope(str, scope) {
      return str.indexOf(scope) > -1;
    }
  }
  return HomeController;
};
