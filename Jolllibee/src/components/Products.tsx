import axios from "axios";
import { useState, useEffect } from "react";
import { serverURL } from "../Global";
import { NumericFormat } from "react-number-format";
interface Product {
  id: number;
  default_name: string;
  img_name: string;
  price: number;
}

interface CategoryDetails {
  categoryID: string;
  categoryName: string;
}

function Products({ categoryID, categoryName }: CategoryDetails) {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(serverURL + "/product_list?id=" + categoryID)
      .then((response) => {
        setProductList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryID, categoryName]);

  return (
    <div className="p-2">
      <h4 className="mb-3 me-3 text-center">{categoryName}</h4>

      <div className="no-gutters">
        <div className="row d-flex flex-wrap">
          {productList.length > 0 ? (
            productList.map((item) => (
              <div
                className="col-xs-3 col-sm-12 col-md-6 col-lg-6 col-xl-3"
                key={item.id}
              >
                <div className="card my-1">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex product-card">
                        <div className="align-self-center">
                          <img
                            src={serverURL + "/product_img/" + item.img_name}
                            alt="product"
                          />
                        </div>

                        <div
                          className="media-body text-right d-flex flex-column"
                          style={{ width: "100%" }}
                        >
                          <p>{item.default_name}</p>
                          <div className="mt-auto d-flex justify-content-between">
                            <NumericFormat
                              value={item.price}
                              displayType="text"
                              thousandSeparator={true}
                              prefix="₱"
                              decimalScale={2}
                              fixedDecimalScale={true}
                            />
                            <button className="mb-0 text-end add-btn">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-secondary text-center">
              We coun't find any results
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
