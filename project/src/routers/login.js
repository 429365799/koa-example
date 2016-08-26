const Login = {

  // Login
  async doLogin(ctx, next) {
    console.log(ctx.req.body);
    

    ctx.body = {a: 100}
  },

  // Logout
  async doLogout(ctx, next) {
    ctx.body = "log out !"
  }
};

export default Login;
