const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {

}).then(() => {
    console.log('connection eshtablished');
}).catch((e) => {
    console.log(e);
    console.log('connection ka bhi maa chud gaya');
});