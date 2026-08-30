const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {

}).then(() => {
    console.log('connection eshtablished');
    console.log("Connected DB:", mongoose.connection.name);
}).catch((e) => {
    console.log(e);
    console.log('connection not eshtablish');
});