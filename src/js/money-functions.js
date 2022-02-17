function formatCurrency(amount) {
    if (amount >= 0) {
        return "$" + amount.toFixed(2) + "";
    } else {
        return "-$" + amount.toFixed(2) + "";
    }
}