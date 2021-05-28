const store = {
    debug: true,

    state: {
        cart: []
    },

    addProductAction(product) {
        if (this.debug) {
            console.log('addProductAction triggered with', product)
        }

        let index = this.state.cart.findIndex(c => c.id === product.id);
        if(index !== -1){
            let productToUpdate = this.state.cart[index];
            productToUpdate.name = product.name;
            productToUpdate.amount++;
            productToUpdate.price = parseInt(productToUpdate.price) + parseInt(product.price);
            this.state.cart[index] = productToUpdate;
        }else{
            this.state.cart.push({
                id: product.id,
                name: product.name,
                amount: 1,
                price: product.price,

            });
        }
    },

    clearCartAction() {
        if (this.debug) {
            console.log('clearCartAction triggered')
        }

        this.state.cart = []
    }
}

export default store;
