const Login = {

  // 登录
  async doLogin(ctx, next) {
    ctx.res.end('Hello!');
  },

  // 登出
  async doLoginup() {
    ctx.res.end('Log up!');
  }
};

export default Login;
