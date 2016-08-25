const Login = {

  // 登录
  async doLogin(ctx, next) {
    ctx.res.end('Hello!');
  },

  // 登出
  async doLogout() {
    ctx.res.end('Log out!');
  }
};

export default Login;
