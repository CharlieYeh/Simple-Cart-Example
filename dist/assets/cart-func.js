$(() => { // function(){}

  const menu5 = document.getElementById('menu5')
  const productList = menu5.querySelector('table tbody')

  const cart = {
    products: [],
    add: function (newProduct) {

      var item = this.products.find((product) => product.item.id === newProduct.id)

      if (item) { // => if (item !== undefined) {} 物件
        // product exists, add one
        item.amount += 1
        item.amountEl.value = item.amount
      }
      else {
        // product does not exists, create a new one
        var el = createItem(newProduct)
        item = {
          item: newProduct,
          amount: 1,
          el: el,
          amountEl: el.childNodes[3].querySelector('input'),
          totalEl: el.childNodes[4].querySelector('input')
        }
        var index = this.insertIndex(newProduct)

        this.products.splice(index, 0, item)
        productList.insertBefore(el, productList.childNodes[index])
      }
    },
    remove: function (id) {
      var index = this.products.findIndex((p) => p.item.id === id)
      this.products[index].el.remove()
      this.products.splice(index, 1)
    },
    insertIndex: function (newProduct) {
      var index = this.products.findIndex((product) => (product.item.id > newProduct.id))
      return (index > -1 ? index : this.products.length)
    },
    increase: function (id) {
      var product = this.products.find((p) => p.item.id === id)
      if(product.amount <10){
        ++product.amount
        updateProductView(product)
      }
    },
    decrease: function (id) {
      var product = this.products.find((p) => p.item.id === id)
      if(product.amount > 1) {
        --product.amount
        updateProductView(product)
      }
    },
  }

  function updateProductView (product) {
    product.amountEl.value = product.amount
    product.totalEl.value = (product.amount * product.item.price).toFixed(2)
  }

  window.cart = cart

  function createItem (product) {
    var zeros = 5 - String(product.id).length
    var item = $('<tr>' +
      '<td>#' + ('0'.repeat(zeros) + product.id) + '</td>' +
      '<td><a href="#" target="_blank">' + (product.title) + '</a></td>' +
      '<td class="bold">' + (product.price) + '</td>' +
      '<td>' +
        '<button type="button" class="btn btn-default btn-xs" onclick="window.cart.decrease(' + product.id + ')">－</button>' +
        '<input type="text" size="5" value="1">' +
        '<button type="button" class="btn btn-default btn-xs" onclick="window.cart.increase(' + product.id + ')">＋</button>' +
      '</td>' +
      '<td><input type="text" size="5" value="' + product.price.toFixed(2) + '" readonly style="width: 100%; text-align: right; padding: 1px 6px;"></td>' +
      '<td>' +
        '<button type="button" class="btn btn-default btn-xs" onclick="window.cart.remove(' + product.id + ')">Delete</button>' +
      '</td>' +
    '</tr>')
    return item[0]
  }

})
