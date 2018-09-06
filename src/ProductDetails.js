import React from "react";

const ProductDetails = ({selectedProduct, backToProducts}) => {
  return(
    <div className="products-container">
      <div className="selected-product-img">
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.image}/>
        <h6>{selectedProduct.manufacturer}</h6>
        <h6>{selectedProduct.class}</h6>
        <h6>{selectedProduct.price}</h6>
        <button style={{width:"200px", height: "30px" }}
         onClick={backToProducts}
        >Back to products</button>
      </div>

       <div className="selected-product-details">
        <h2>Tech Specs</h2>
        <ul>
          <li>length: {selectedProduct.techspecs.length}</li>
          <li>maxAccel: {selectedProduct.techspecs.maxaccel}</li>
          <li>maxatmosphericspeed: {selectedProduct.techspecs.maxatmosphericspeed}</li>
          <li>targeting: {selectedProduct.techspecs.targeting}</li>
          <li>armament: {selectedProduct.techspecs.armament}</li>
          <li>communications: {selectedProduct.techspecs.communications}</li>
          <li>sensor: {selectedProduct.techspecs.sensor}</li>
          <li>hull: {selectedProduct.techspecs.hull}</li>
          <li>MGLT: {selectedProduct.techspecs.MGLT}</li>
        </ul>
        <button style={{width:"200px", height: "30px" }}
       
        >Buy</button>
      </div>
  </div>
  )
};

export default ProductDetails;