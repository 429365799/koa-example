const should = require('should')
const path = require('path')
const db = require(path.join(__dirname, '../build', 'config', 'db_config.js'))

describe('MongoDB test', () => {

  describe('连接测试', () => {

    it('连接必须存在', () => {
      db.should.exit;
    });

    it('必须是blog数据库，并且端口是27017', () => {
      db.default.name.should.equal('blog')
      db.default.port.should.equal(27017)
    });
  });
});