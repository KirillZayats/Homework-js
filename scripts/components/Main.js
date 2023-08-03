import DOM from "../helper/helper.js";

class Main {
  #element;
  #create() {
    this.element = DOM.create("main");
  }

  init() {
    console.log("main");
    this.#create();
    this.router(this.#element);
    return this.element;
  }

  #createProduct(id) {
    DOM.html(this.#element, `
        <div class="product-page">
          <h1 class="product-page__title">${window.shop.data[id].title}</h1>
          <button class="product-page__close_btn">+</button>
          <input hidden name="id" value='${window.shop.data[id].id}'>
          <img class="product-page__image" src='${window.shop.data[id].image}'>
          <p class="product-page__description">${window.shop.data[id].description}</p>
          <div class="product-page__info">
              <span class="product-page__info_price">$${window.shop.data[id].price}</span>
                <div class="product-page__info_stars" style="
                    width:150px; 
                    height: 30px;
                    background: linear-gradient(0.25turn, yellow ${window.shop.data[id].rating.rate*100/5}%, #ccc 0);">
                  <img class="product-page__stars_template" src="../images/stars_template.png">
                </div>
          </div>
        </div>`);

      DOM.search(this.#element,'.product-page__close_btn').addEventListener('click', () => {
          if(window.navigation.canGoBack)
              window.navigation.back();
          else window.location.hash = '';
      });
  }

  router() {
    let hash = window.location.hash;
    if (!hash) {
        this.#createShop();
    } else if (hash.includes('product')) {
        let id = window.location.hash.match(/[0-9]+$/)[0] - 1;
        (id >= 0 && id < window.shop.data.length) ? this.#createProduct(id) : window.location.hash = "#";
    } else if (hash.includes('cart')){
      this.#createCart();
    } else {
      console.log(hash);
      window.location.hash = "#";
      this.#createShop();
      
    }
}

  #createCart() {
    let cartList = document.createElement('ul');
    cartList.classList.add('cart_list');

    new Set(window.shop.cart.get()).forEach(elem => {
        cartList.append(this.#createCartItem(elem));
    })
    DOM.html(this.#element, '');
    this.#element.append(cartList);
    let sum = document.createElement('span');
    sum.classList.add('cart_sum');
    sum.innerText = `To pay: $${window.shop.cart.calc()}`
    this.#element.append(sum);

  }

  #createCartItem(product) {
    let elem = document.createElement('li');
    elem.classList.add('cart_list__item');
    
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('cart_list__item_remove_btn');
    DOM.html(removeBtn, 'Очистить')
    removeBtn.addEventListener('click', (event) => {
        let id = event.target.parentNode.querySelector('input[name="id"]').value;
        this.#onRemove(id);
    });

    let sumPrice = product.price * window.shop.cart.isInCart(product.id).length;
    let itemCounter = window.shop.cart.isInCart(product.id).length;
    elem.innerHTML = `
        <span class="cart_list__item_title">${product.title}</span>
        <div class='cart_list__item_block'>
          <span class="cart_list__item_price">$${sumPrice.toFixed(2)}</span>
          <div class="cart_list__item_block-counter">
            <input hidden name="id" value='${product.id}'>
            <button class="cart_list__item_increase_btn">+</button>
            <span class="cart_list__item_counter">${itemCounter}</span> 
            <button class="cart_list__item_reduce_btn">-</button>
          </div>
          <svg class="cart_list__item_remove_btn" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 12V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 7H20" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>`;
        this.#setEventsButtonsCart(elem);
    return elem;
  }

  #setEventsButtonsCart(elem) {
    DOM.search(elem, '.cart_list__item_remove_btn').addEventListener('click', (event) => {
      let id = event.target.parentNode.querySelector('input[name="id"]').value;
      this.#onRemove(id);
    });
    DOM.search(elem, '.cart_list__item_increase_btn').addEventListener('click', (event) => {
      let id = event.target.parentNode.querySelector('input[name="id"]').value;
      this.#onIncrease(id);
    })
    DOM.search(elem, '.cart_list__item_reduce_btn').addEventListener('click', (event) => {
      let id = event.target.parentNode.querySelector('input[name="id"]').value;
      this.#onReduce(id);
    })
  }

  #createShop() {
    let title = DOM.create("h1");
    DOM.html(title, "Products");
    DOM.append(this.element, title);
    let listCard = DOM.create('div');
    DOM.addClass(listCard, 'cards')
    window.shop.data.forEach((element) => {
      let card = DOM.create("a");
      DOM.attr(card, 'href', `#product/${element.id}`)
      DOM.html(card, `<input hidden="" name="id" value="${element.id}">
                      <img class="cards-product__image" src="${element.image}" alt="product">
                      <div class="cards-product__info">
                          <p class="cards-product__title">${element.title}</p>
                          <p class="cards-product__price">$${element.price}</p>
                      </div>`);

      let addBtn = DOM.create('button');
      DOM.addClass(addBtn, 'add-cart')
      if (window.shop.cart.isInCart(element.id).length)
          {
              addBtn.innerText = 'In cart';
              addBtn.classList.contains('in_cart') ? '' : addBtn.classList.add('in_cart')
          }
      else {
          addBtn.innerText = 'To cart';
          addBtn.classList.contains('in_cart') ? addBtn.classList.remove('in_cart') : '';
      }

      addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let id = event.target.parentNode.querySelector('input[name="id"]').value;
        this.#onAdd(id);
    },);

      DOM.append(card, addBtn);
      DOM.append(listCard, card);
    });


    DOM.htmlClear(this.#element);
    DOM.append(this.#element, listCard);

  }

  #onAdd(id) {
    window.shop.cart.add(window.shop.getById(id));
  }

  #onRemove(id) {
    window.shop.cart.remove(id);
  }

  #onIncrease(id) {
    window.shop.cart.add(window.shop.getById(id));
  }
  #onReduce(id) {
    window.shop.cart.removeFirst(id);
  }

  get element() {
    return this.#element;
  }

  set element(element) {
    this.#element = element;
  }
}

export default new Main();