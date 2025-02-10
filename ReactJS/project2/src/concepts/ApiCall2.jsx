import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function ApiCall2() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   useEffect(cb,dep arr)
  if (products) {
    return (
      <div>
        <h1 className="text-center bg-success p-3">
          Making API call using useEffect
        </h1>
        <h2 className="text-center">Products</h2>
        <div className="container">
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-md-4 my-2">
                  <div
                    class="card m-2"
                    style={{ width: "20rem", height: "100%" }}
                  >
                    <img
                      class="card-img-top"
                      style={{ height: "50%" }}
                      src={product.image}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="card-text">{product.description}</p>
                      <p className="text-success">Price: {product.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ApiCall2;
