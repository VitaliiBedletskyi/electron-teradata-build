// const TeradataConnection = require("teradata-nodejs-driver/teradata-connection");
// const TeradataExceptions = require("teradata-nodejs-driver/teradata-exceptions");
const ref = require('ref-napi');
async function connectToTeradata(connectionConfig) {
    // try {
    //     // console.log(`Teradata connection run in PID: ${process.pid}`);
    //     console.log(connectionConfig);
    //
    //     const teradataConnection = new TeradataConnection.TeradataConnection();
    //     teradataConnection.connect(connectionConfig);
    //     let cursor = teradataConnection.cursor();
    //     cursor.execute('SELECT * FROM HR.Employees;');
    //     const rows = cursor.fetchall();
    //
    //     console.log(rows);
    //
    //     cursor.close();
    //     teradataConnection.close();
    // } catch (error) {
    //     if (error instanceof TeradataExceptions.OperationalError) {
    //         /* A database operational error */
    //         console.log(error.message);
    //     } else {
    //         console.log(error);
    //     }
    // }
};

module.exports = {
    connectToTeradata
};

