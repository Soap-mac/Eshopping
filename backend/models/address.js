const mongoose = require('mongoose');
const AddressserSchema = new mongoose.Schema({
    address_id: {
        type: String,
        default: "",
    },
    address_line: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    pincode: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Address = mongoose.model('Address', AddressserSchema);
module.exports = Address;