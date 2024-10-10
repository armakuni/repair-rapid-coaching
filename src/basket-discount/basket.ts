type Item = {name: string, price: number, qty: number};

export default class Basket {

    private thingAdded :boolean = false;

    AddItem(_item: Item) {
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