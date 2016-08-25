import request from 'superagent'

const Login = {

  // Login
  async doLogin(ctx, next) {
    request.get('http://localhost:3001/login/doLogout').end(res => {
      console.log(res);
    })
    ctx.res.end('Hello!');
  },

  // Logout
  async doLogout(ctx, next) {
    ctx.res.end('Log out!!!');
  }
};

export default Login;
