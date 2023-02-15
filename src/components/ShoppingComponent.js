import { useState, useEffect } from "react";

function ShoppingComponent() {
    const [Categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);

    function LoadCategories() {
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('All')
            setCategories(data);
        })
    }
    function LoadProducts(){
        fetch('http://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(data=>{
            setProduct(data);       
         })
    }
    useEffect(()=>{
          LoadCategories();
          LoadProducts();
    },[]);
    return (
        <div className="container-fluid">
            <header className="bg-danger text-danger text-center">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select className="form-select">
                               {
                                 Categories.map(Category=>
                                    <option key={Category}>{Category.toUpperCase()}</option>
                                    )
                               }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto " style={{height:'600px'}}>
                   {
                    product.map(product=>
                        <div key={product.id} className="card m-2 p-2 w-25 " >
                            <img src={product.image} className="card-image-top " height="150" alt="" />
                            <div className="card-header">
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
                        </div>
                        )
                   }
                </main>
            </section>
        </div>
    )
}
export default ShoppingComponent;