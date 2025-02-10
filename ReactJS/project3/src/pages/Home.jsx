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
                <div key={index} className="col-md-4 my-2">
                  <Link to={`/viewproduct/${product.id}`}>
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
