var db = require('./models');

db.user.create({firstname: 'Nick', lastname: 'Cronquist', email: 'ncron23@gmail.com', username: 'ncronquist', password: 'test', dob: '1986-12-23'});
