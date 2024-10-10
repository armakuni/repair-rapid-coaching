// type Item = {name: string, price: number, qty: number};

export default class Basket {

    // {name: "car", price: 50, qty: 1}

    private thingAdded;
    AddItem({ name, price, qty }) {
        this.thingAdded = true;
        return;
    }

    countItems() {
        if (this.thingAdded) {
            return 1
        }
        return 0
    }
    getTotalPrice() {
        return 0
    }
    discountApplied(){
        return 0
    }
    getDiscountValue() {
        return 0
    }
    getFinalTotalPrice() {
        return 0
    }
}