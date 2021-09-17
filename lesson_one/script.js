class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._goodsObjects = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [
            { id: 1, title: 'iPad', price: 30000 },
            { id: 2, title: 'iPhone', price: 70000 },
            { id: 3, title: 'Apple Watch', price: 25000 },
            { id: 4, title: 'Macbook', price: 100000 },
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._goodsObjects.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
        }
    }
}

class ProductItem {
    constructor(item, img = 'https://www.advesti.ru/img/1374848434_apple.jpg') {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
    <img src="${this.img}" alt="Some img">
    <div class="desc">
    <h3>${this.title}</h3>
    <p>${this.price} \u20bd</p>
    <button class="buy-btn">В корзину</button>
    </div>
    </div>`;
    }
}

const catalog = new ProductsList();