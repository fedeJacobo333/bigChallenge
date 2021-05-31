const store = {
    debug: true,

    state: {
        cart: {
            products: [],
            price: 0,
            number_elements: 0,
        }
    },

    addProductAction(product) {
        if (this.debug) {
            console.log('addProductAction triggered with', product)
        }

        let index = this.state.cart.products.findIndex(c => c.id === product.id);
        if(index !== -1){
            let productToUpdate = this.state.cart.products[index];
            productToUpdate.amount++;
            productToUpdate.price = parseInt(productToUpdate.price) + parseInt(product.price);
            this.state.cart.products[index] = productToUpdate;
            this.state.cart.price = parseInt(this.state.cart.price) + parseInt(product.price);
            this.state.cart.number_elements++;
        }else{
            const productToAdd = {
                id: product.id,
                name: product.name,
                amount: 1,
                price: product.price
            };
            this.state.cart.products.push(productToAdd);
            this.state.cart.price = parseInt(this.state.cart.price) + parseInt(product.price);
            this.state.cart.number_elements++;
        }
    },

    removeProductAction(product) {
        if (this.debug) {
            console.log('removeProductAction triggered with', product)
        }

        let index = this.state.cart.products.findIndex(c => c.id === product.id);
        if(index !== -1){
            let productToUpdate = this.state.cart.products[index];
            if (productToUpdate.amount === 1) {
                if(this.state.cart.products.length === 1) {
                    this.state.cart.products = [];
                } else {
                    this.state.cart.products.splice(index, 1);
                }
                this.state.cart.price = parseInt(this.state.cart.price) - parseInt(product.price);
            }else{
                productToUpdate.amount--;
                let priceAux = product.price;
                productToUpdate.price = parseInt(productToUpdate.price) - (parseInt(priceAux)/parseInt(productToUpdate.amount + 1));
                this.state.cart.products[index] = productToUpdate;
                this.state.cart.price = parseInt(this.state.cart.price) - (parseInt(priceAux)/parseInt(productToUpdate.amount + 1));
            }
            this.state.cart.number_elements--;
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
