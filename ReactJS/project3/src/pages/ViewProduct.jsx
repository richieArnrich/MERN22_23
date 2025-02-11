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
      {product && (
        <div className="container p-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%" }}
                
              />
            </div>
            <div className="col-md-8">
              <div className="border p-5">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Category : {product.category}</p>
                <p>
                  Rating : {product.rating.rate} | Reviews :{" "}
                  {product.rating.count}
                </p>
                <h6>Price : Rs {product.price}</h6>
                <button className="btn btn-secondary">Add to cart</button>
                <button className="btn btn-warning mx-2">Buy Now</button>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ViewProduct;
