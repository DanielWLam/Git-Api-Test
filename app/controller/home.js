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
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * githubcallback() {
      const { ctx, app } = this;
      const code = ctx.query.code;
      const clientId = '3712b4d55fd92f7f6a0f';
      const clientSecret = '5bd9f7dd6d8aed4a5329503ed90297d2af336660';
      const data = {
        method: 'POST',
        dataType: 'json',
        client_id: clientId,
        client_secret: clientSecret,
        code
      };
      // const result = yield app.curl(
      //   'https://github.com/login/oauth/access_token',
      //   data
      // );
      let result = yield app.post('https://github.com/login/oauth/access_token', data);
      ctx.body = result.data;
    }
  }
  return HomeController;
};
