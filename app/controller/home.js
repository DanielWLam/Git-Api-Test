'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * githubcallback () {
      const { ctx, app } = this;
      const code = ctx.query.code;
      const clientId = '3712b4d55fd92f7f6a0f';
      const clientSecret = '5bd9f7dd6d8aed4a5329503ed90297d2af336660';
      const accessToken = yield app.curl('https://github.com/login/oauth/access_token', {
        method: 'POST',
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
      ctx.body = accessToken;
    }
  }
  return HomeController;
};
