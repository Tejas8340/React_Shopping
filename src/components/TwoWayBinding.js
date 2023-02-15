import { useState } from "react";

function TwoWayBinding() {
    const [product, setProduct] = useState({ Name: '', Price: 0, City: '', Stock: false });
    const [newProduct, setNewProduct] = useState({ Name: '', Price: 0, City: '', Stock: false });
    function handleName(e) {
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handlePrice(e) {
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handleCity(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }
    function handleStock(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }
    function handleRegisterClick(){
        setNewProduct(product);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleName} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePrice} className="form-control" /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Delhi</option>
                                <option>Hydrabad</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input onChange={handleStock} className="form-check-input" type="checkbox" /> Available
                        </dd>
                    </dl>
                    <button onClick={handleRegisterClick} className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dd>Price</dd>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock==true)?"Available":"Out Of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default TwoWayBinding;