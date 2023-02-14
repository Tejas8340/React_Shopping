import { useState, useEffect } from "react";

function ShoppingComponent() {
    const [Categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])

    function LoadCategories() {
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('All')
            setCategories(data);
        })
    }
    useEffect(()=>{
          LoadCategories();
    },[]);
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center">
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
                <main>

                </main>
            </section>
        </div>
    )
}
export default ShoppingComponent;