$(() => {
  const products = [
    {
      id: 0,
      title: 'Product A',
      year: 2011,
      region: 'Douro',
      alcohol: 13,
      price: 30.9
    },
    {
      id: 1,
      title: 'Product B',
      year: 2013,
      region: 'California',
      alcohol: 12,
      price: 19.9
    },
    {
      id: 2,
      title: 'Product C',
      year: 2013,
      region: 'Argentina',
      alcohol: 12,
      price: 125.9
    },
    {
      id: 3,
      title: 'Product D',
      year: 2012,
      region: 'Washington',
      alcohol: 13,
      price: 83.9
    },
    {
      id: 4,
      title: 'Product E',
      year: 2009,
      region: 'Pauillac, Bordeaux',
      alcohol: 12,
      price: 39.0
    },
    {
      id: 5,
      title: 'Product F',
      year: 2011,
      region: 'California',
      alcohol: 12,
      price: 115.9
    },
    {
      id: 6,
      title: 'Product G',
      year: 2006,
      region: 'McLaren Vale',
      alcohol: 12,
      price: 13.9
    },
    {
      id: 7,
      title: 'Product H',
      year: 2010,
      region: 'Chile',
      alcohol: 12,
      price: 22.9
    },
  ]

  products.nextId = 8

  products.getProduct = function (id) {
    return this[id]
  }

  products.addProduct = function (info = {}) {
    return this.push(Object.assign({ id: this.nextId++ }, info))
  }

  window.products = products

  const menu3 = document.getElementById('menu3')

  function init () {
    products.forEach((product) => {
      let wine = createWine(product)
      menu3.appendChild(wine)
    })
  }

  init()

  function createWine (wine = {}) {
    let item = $('<div class="product">' +
        '<div class="product__info" style="text-align:center;">' +
        '<img class="image" src="img/image/1.png" style="width: 150px; height: 150px;" alt="Product 1" />' +
        '<h3 class="product__title">' + wine.title + '</h3>' +
        '<span class="product__year extra highlight">' + wine.year + '</span>' +
        '<span class="product__region extra highlight">' + wine.region + '</span>' +
        '<span class="product__alcohol extra highlight">' + wine.alcohol + '%</span>' +
        '<span class="product__price highlight">$' + (wine.price.toFixed(2)) + '</span>' +
        '<button onclick="AddCart(' + wine.id + ')" class="action action--button action--buy"><i class="fa fa-shopping-cart"></i><span class="action__text">Add to cart</span></button>' +
      '</div>' +
      '<label class="action action--compare-add"><input class="check-hidden" type="checkbox" /><i class="fa fa-plus"></i><i class="fa fa-check"></i><span class="action__text action__text--invisible">Add to compare</span></label>' +
    '</div>')
    return item[0]
  }

  function AddCart (id) {
    let product = products.getProduct(id)
    window.cart.add(product)
  }

  window.AddCart = AddCart

})
