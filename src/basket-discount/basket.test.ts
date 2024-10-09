describe('Discounting Basket', () => {

    // test('should apply 10% discount when basket > $200', () => {
    //     const products = [
    //         {
    //             name: 'item a',
    //             price: '10', // Number?
    //             qty: 5
    //         },
    //         {
    //             name: 'item b',
    //             price: '25',
    //             qty: 2
    //         },
    //         {
    //             name: 'item c',
    //             price: '9.99',
    //             qty: 6
    //         }
    //     ];
    //
    //     const basket = new Basket();
    //     // add products to basket
    //
    //     expect(basket.getTotal()).toEqual(151.94); // Subtotal
    //     expect(basket.discountApplied).toEqual(10); // Applied discount
    //     expect(basket.getDiscountValue()).toEqual(14.19); // Discount in $
    //     expect(basket.getFinalTotal()).toEqual(136.75); // Final total
    // })

    test("should return 0 when the basket is empty", () => {
        const basket = new Basket()

        expect(basket.getItems()).toEqual(0); // Total items in basket
        expect(basket.getTotalPrice()).toEqual(0); // Subtotal
        expect(basket.discountApplied).toEqual(0); // Applied discount
        expect(basket.getDiscountValue()).toEqual(0); // Discount in $
        expect(basket.getFinalTotalPrice()).toEqual(0); // Final total
    })

    // test("should add 1 item and return the item count", () => {
    //     const basket = new Basket()
    //     basket.AddItem({name: "car", price: 50, qty: 1})
    //
    //     expect(basket.getItems()).toEqual(1); // Total items in basket
    //     expect(basket.getTotalPrice()).toEqual(50); // Subtotal
    //     expect(basket.discountApplied).toEqual(0); // Applied discount
    //     expect(basket.getDiscountValue()).toEqual(0); // Discount in $
    //     expect(basket.getFinalTotalPrice()).toEqual(50); // Final total
    // })
    //
    // describe('when adding multiple items', () => {
    //     test('should add two of the same item - $20 each', () => {
    //         const basket = new Basket();
    //         basket.AddItem({name: 'car', price: 20, qty: 2});
    //     });
    //
    //     test('should add two different items - $20 each', () => {
    //         const basket = new Basket();
    //         basket.AddItem({name: 'car', price: 20, qty: 1});
    //         basket.AddItem({name: 'car 2', price: 20, qty: 1});
    //     });
    // })
});