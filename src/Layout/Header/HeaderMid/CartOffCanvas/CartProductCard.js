import React from "react";

function CartProductCard(props) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.product.productImage}
              className="img-fluid rounded-start"
              alt="Lorem"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.product.productName}</h5>
              <p className="card-text">Qty. {props.product.productQty}</p>
              <p className="card-text">Rs. {props.product.productPrize}</p>
              <button type="button" className="btn btn-secondary btn-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartProductCard;
