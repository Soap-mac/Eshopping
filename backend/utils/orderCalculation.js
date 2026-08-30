const calculatePrice = (subTotal) => {
    const tax = subTotal * 0.10;
    const deliveryCharge = subTotal > 250 ? 0 : 50;
    const totalAmount = subTotal + tax + deliveryCharge;
    return {
        tax,
        deliveryCharge,
        totalAmount
    }
}


module.exports = calculatePrice;