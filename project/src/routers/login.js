const Login = {

  // Login
  async doLogin(ctx, next) {
    ctx.body = {a: 100}

    const view = Number(ctx.cookies.get('view')) || 1
    ctx.cookies.set('view', view + 1)
  },

  // Logout
  async doLogout(ctx, next) {
    ctx.body = "log out !"
  }
};

export default Login
