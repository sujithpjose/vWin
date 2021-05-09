const mongoose = require('mongoose');
const constants = require('../constants/databse.constants');
const connectionUrl = `mongodb://${constants.MLAB_USERNAME}:${constants.MLAB_PASSWORD}@ds127362.mlab.com:27362/${constants.MLAB_DB_NAME}`;

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    keepAlive: 1,
    useUnifiedTopology: true
});

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
    console.log('connected to a database')
});