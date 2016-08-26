const Login = {

  // Login
  async doLogin(ctx, next) {
    ctx.body = {a: 100}
  },

  // Logout
  async doLogout(ctx, next) {
    ctx.body = "log out !"
  }
};

export default Login;
