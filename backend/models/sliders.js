const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Slider', sliderSchema);