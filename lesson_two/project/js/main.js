const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('Error');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};


class ProductList {
    #goods;
    #allProducts;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        // this._fetchGoods();
        this.#getProducts().then((data) => {
            this.#goods = data;
            this.#render();
        });

        console.log(this.sum());
    }



    #getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch((error) => {
                console.log(error);
            });
    }

    sum() {
        return this.#allProducts.reduce((sum, { price }) => sum + price, 0);
    }

    #render() {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);

            this.#allProducts.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://www.advesti.ru/img/1374848434_apple.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getGoodHTML() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
    }
}

const list = new ProductList();