function fetchproduct(done)
{
    $.get('/api/product',function(data)
    {
        done(data);
    })
}
function createproductcard(product)
{
    return $(`<div class='row ml-5' id='product-list'>
    <div class='col-3 card mx-2 p-1'>
        <h4 class='product-name'>${product.name}</h4>
        <div class='product-manufacturer'>${product.manufacturer}</div>
        <div class='row'>
          <div class='col m-3 p-3'>
            <b>Rs. ${product.price}</b>
         </div>
      <button class='btn btn-primary col m-3'>BUY</button>
     </div>
    </div>`)
}
function addproduct(name,manufacturer,price,done)
{
  $.post('/api/product',{
      name:name,
      manufacturer:manufacturer,
      price:price
  },function(data)
  {
      done(data);
  })
}