import { useState, useEffect } from "react";

function ShoppingComponent() {
    const [Categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    function GetCartItemsCount(){
        setItemsCount(cartItems.length);
    }

    function LoadCategories() {
        fetch('http://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('all')
                setCategories(data);
            })
    }
    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
    }
    useEffect(() => {
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    }, []);
    function handleCategoryChange(e) {
        if (e.target.value == 'all'){
            LoadProducts('http://fakestoreapi.com/products');
    }else {
        LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }
}
   function handleAddtoCart(e){
      alert("Items Added to Cart");
      fetch(`http://fakestoreapi.com/products/${e.target.id}`)
      .then(response=>response.json())
      .then(data=>{
        setCartItems(data);
      })
   }


    return (
        <div className="container-fluid">
            <header className="bg-danger text-danger text-center">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    Categories.map(Category =>
                                        <option value={Category} key={Category}>{Category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto ">
                    {
                        product.map(product =>
                            <div key={product.id} className="card m-2 p-2 w-25 " >
                                <img src={product.image} className="card-image-top " height="150" alt="" />
                                <div className="card-header" style={{ height: '160px' }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate}<span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-2">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span> [{itemsCount}]Add to Cart
                    </button>
                </aside>
            </section>
        </div>
    )
}
export default ShoppingComponent;