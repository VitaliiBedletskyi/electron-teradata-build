const teradataService = require('./teradataService');

const connParams = {
    host: '127.0.0.1',
    log: '0',
    password: 'dbc',
    user: 'dbc',
    dbs_port: '1025'
};
const testTeradata = () => teradataService.connectToTeradata(connParams);

module.exports = {
    testTeradata,
};
