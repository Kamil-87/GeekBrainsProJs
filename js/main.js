const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [
      {
        "id_product": 789,
        "product_name": "Мышка классическая",
        "price": 1000
      },
      {
        "id_product": 15,
        "product_name": "Мышка навороченная",
        "price": 10000
      }
    ],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    cartUrl: '/addToBasket.json',
    goods: [
/*      {
        "id_product": 789,
        "product_name": "Мышка классическая",
        "price": 1000,
        "quantity": 2
      },
      {
        "id_product": 15,
        "product_name": "Мышка навороченная",
        "price": 10000,
        "quantity": 1,
      },*/
    ],
    isVisibleCart: false,
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    addProduct(product) {
      console.log(product['id_product']);
    },

    filterGoods() {
      console.log('filter');
      let searchLine = this.searchLine.toLowerCase();

      if(!searchLine) {
        return this.products;
      }

      return this.products = this.products
          .filter(product => product['product_name']
          .toLowerCase().indexOf(searchLine) !== -1);
     },

  },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
          }
        });

  },

  computed: {
    // filterGoods() {
    //   let searchLine = this.searchLine.toLowerCase();
    //   let filter_products = this.products;
    //
    //   if(!searchLine) {
    //     return filter_products;
    //   }
    //
    //   return filter_products = filter_products.filter(product => product['product_name'].toLowerCase().indexOf(searchLine) !== -1);
    // }

  }

});
