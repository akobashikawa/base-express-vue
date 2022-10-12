const homeRouter = require('./homeRouter');
const usersRouter = require('./usersRouter');

const routers = (app) => {
    app.use('/', homeRouter);
    app.use('/api/users', usersRouter);
};

module.exports = routers;