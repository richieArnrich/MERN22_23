import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

function ViewProduct() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <h1>View Product Page</h1>
      {product && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Category : {product.category}</p>
              <p>Price : Rs {product.price}</p>
              <p>
                Rating : {product.rating.rate} of {product.rating.count}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ViewProduct;
