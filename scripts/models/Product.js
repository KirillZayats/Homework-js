class Rating {
    #data = {};

    constructor(data) {
        this.data = data;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data.rate = data.rate ? data.rate : 
            this.#data.rate ? this.#data.rate : '';
        this.#data.count = data.count ? data.count : 
            this.#data.count ? this.#data.count : '';
    }
    
    toString() {
        return `rate: ${this.data.rate}<br/> count: ${this.data.count}`;
    }

    toJSON() {
        return {city: this.#data.city, street: this.#data.street}
    }
}

export default class Product {
    #data = {};
    constructor(data) {
        this.data = data;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data.id = data.id ? data.id : 
                    this.#data.id ? this.#data.id : '';
        this.#data.title = data.title ? data.title : 
                    this.#data.title ? this.#data.title : '';
        this.#data.price = data.price ? data.price : 
                    this.#data.price ? this.#data.price : '';
        this.#data.description = data.description ? data.description : 
                    this.#data.description ? this.#data.description : '';
        this.#data.category = data.category ? data.category : 
                    this.#data.category ? this.#data.category : '';
        this.#data.image = data.image ? data.image : 
                    this.#data.image ? this.#data.image : '';
        this.#data.rating = data.rating ? new Rating(data.rating) : 
                    this.#data.rating ? this.#data.rating : '';
    }

    toString() {
        return `Id:${this.data.id}<br/> title: ${this.data.title}<br/> 
                price: ${this.data.price}<br/> description: ${this.data.description}<br/>
                category: ${this.data.category}<br/> image: ${this.data.image}<br/>
                rating: ${this.data.rating}`;
    }

    toJSON() {
        return {
            id: this.#data.id,  
            title: this.#data.title,
            price: this.#data.price,
            description: this.#data.description,
            category: this.#data.category,
            image: this.#data.image,
            rating: this.#data.rating
        }
    }
}