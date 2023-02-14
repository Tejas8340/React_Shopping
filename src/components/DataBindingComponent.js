function DataBindingComponent(){
    var product = {
        Name: 'Samsung TV',
        Price: 45000.50,
        Stock: true
    }
    return(
        <div className="container ">
             <h2>Product Details</h2>
             <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
             </dl>
        </div>
    )
}

export default DataBindingComponent;