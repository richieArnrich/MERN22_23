import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState();
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
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product, index) => {
              return (
                <div key={index} className="col-md-12 my-1">
                  <Link to={`/viewproduct/${product.id}`} id="link">
                    <div class="d-flex p-3 border align-items-center">
                      <div style={{ width: "20%" }}>
                        <img
                          src={product.image}
                          alt="product"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text-dark p-2" style={{ width: "100%" }}>
                        <h4>{product.title}</h4>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Reviews: {product.rating.count}</p>
                        <h5>Price: ${product.price}</h5>
                        <div className="btn btn-warning">Add to cart</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
