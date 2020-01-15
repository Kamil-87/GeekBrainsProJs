const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };


let getRequest = (url) => {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status !== 200) {
            reject('Error');
          } else {
            resolve( xhr.responseText );
          }
        }
      };
      xhr.send();
    });
  };

getRequest(`${API}/catalogData.json`)
    .then((data) => { // resolve
    console.log(data);
  }).catch((error) => { // reject
    console.log(error);
  });


class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    // this._getProducts()
    //   .then(data => {
    //     this.goods = [...data];
    //     this.render();
    //   });
  }

  _fetchProducts() {
    getRequest(`${API}/catalogData.json`)
        .then(data => {
            this.goods = JSON.parse(data);
            console.log(this.goods);
            this.render();
        })
        .catch(error => {
           console.log(error);
        });
  }

  // _getProducts() {
  //   return fetch(`${API}/catalogData.json`)
  //     .then(result => result.json())
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
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

