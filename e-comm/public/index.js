$(function()
{
    let productlist=$('#product-list');
    fetchproduct(function(products)
    {
    productlist.empty();
    for(product of products)
    {
        productlist.append(createproductcard(product));
    }
})
})