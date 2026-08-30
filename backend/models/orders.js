const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    orderId: {
        type: String,
        required: true,
        unique: true,
    },

    paymentMethod: {
        type: String,
        enum: ['COD', 'RAZORPAY'],
        required: true
    },

    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            variantSku: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            },
            images: [String],
            name: String,
            brand: String,
            options: {
                type: Map,
                of: String
            }
        }
    ],

    paymentId: {
        type: String,
        default: "",
    },

    paymentStatus: {
        type: String,
        enum: [
            'pending',
            'completed',
            'failed',
            'refunded'
        ],
        default: 'pending',
    },

    orderStatus: {
        type: String,
        enum: [
            "placed",
            "confirmed",
            "processing",
            "shipped",
            "delivered",
            "cancelled"
        ],
        default: "placed"
    },

    paymentError: {
        type: String,
        default: ""
    },
    razorpayOrderId: {
        type: String,
        default: ""
    },

    razorpayPaymentId: {
        type: String,
        default: ""
    },

    razorpaySignature: {
        type: String,
        default: ""
    },

    deliveryAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },

    subTotal: {
        type: Number,
        required: true,
        default: 0,
    },

    totalAmount: {
        type: Number,
        required: true,
        default: 0,
    },
    taxes: {
        type: Number,
        default: 0
    },

    deliveryCharge: {
        type: Number,
        default: 0
    },
    cancelReason: {
        type: String,
        default: ""
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
