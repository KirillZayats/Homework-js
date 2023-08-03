class Cart {
    #data = [];
    cartEvent = new Event('cartChanged', {bubbles:true});

    add(product) {
        this.#data.push(product);
        this.updateStorage();
        dispatchEvent(this.cartEvent);
    }

    remove(id) {
        this.#data = this.#data.filter(elem => elem.id != id);
        this.updateStorage();
        dispatchEvent(this.cartEvent);
    }

    removeFirst(id) {
        let index = this.#data.indexOf(this.#data.find(elem => elem.id == id));
        this.#data.splice(index, 1);
        this.updateStorage();
        dispatchEvent(this.cartEvent);
    }

    clear() {
        this.#data = [];
        this.updateStorage();
        dispatchEvent(this.cartEvent);
    }

    get() {
        return this.#data.sort((a, b) => {
            return a.id - b.id;
          });
    }
    
    calc() {
        let sum = 0;
        this.#data.forEach(elem =>
            sum += elem.price
        );
        return sum.toFixed(2);
    }
    isInCart(id) {
        if (!this.#data.length) return false;
        return this.#data.filter(elem => elem.id == id);
    }

    updateStorage() {
        window.localStorage.setItem('storeApp', JSON.stringify(this.#data));
    }
}

export default Cart;