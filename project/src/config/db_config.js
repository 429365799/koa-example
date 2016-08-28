import mongoose from 'mongoose'

const uri = 'mongodb://localhost/blog';
const options = {
  server: {
    poolSize: 10
  }
}

const db = mongoose.createConnection(uri, options);

db.on('error', error => {
  console.error(error);
})

db.on('open', callback => {
  console.log('链接成功');
})

export default db;