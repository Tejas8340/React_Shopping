import {useState} from "react";

function TwoWayBinding(){
    const[product, setProduct] = useState({Name:'', Price:0, City:'', Stock:false});
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select">
                                <option>Delhi</option>
                                <option>Hydrabad</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" type="checkbox" /> Available
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                </div>
            </div>
        </div>
    )
}
export default TwoWayBinding;