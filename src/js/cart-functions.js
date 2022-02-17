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

function calculateTotal(itemsArray) {
    itemsArray.push( {
        name: "name",
        price: price
    })
    for(let item of itemsArray) {
        price += item.price;
    }
}

function addItem(itemsArray,name,price) {
    itemsArray.push( {
        name : name,
        price: price
    })
}

function removeItem(itemsArray,index) {

}


module.exports = {calculateChange,isSufficientPayment,calculateTotal};