import mongoose from 'mongoose'
import db from '../config/db_config.js'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: String,
  username: String,
  password: String,
  phone: String,
  age: Number
})

userSchema.methods.judgeUser = function () {
  return new Promise((resolve, reject) => {

    // const user = await this.model('User').findOne({username: this.username}).exec()

    const query = this.model('User').findOne({username: this.username});
    mongoose.Promise = global.Promise;
    console.log(query.then);
    query.then(user => {
      console.log(user);
    })

    // console.log(user);

    if (user.password === this.password) {
      resolve(user);
    }else {
      reject('password error');
    }
  });
}

const User = mongoose.model('User', userSchema);

const tom = new User({ username: '123', password: 'chenfq123' });

tom.judgeUser().then(result => {
  console.log(result);
})