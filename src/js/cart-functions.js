function calculateChange(total,payment) {
    return payment - total;
}

function isSufficientPayment(total,payment) {
    if (payment >= total) {
        return true;
    } else {
        return false;
    }
}
module.exports = {calculateChange,isSufficientPayment};