import React from "react";
import { connect } from "react-redux";
import { getAllProducts } from "./redux/actions";
import "./products.css";
import ProductDetails from "./ProductDetails";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showDetails: false,
      selectedProduct: {},
      image: "https://vignette.wikia.nocookie.net/starwars/images/6/65/TIEaft-SWE.jpg/revision/latest?cb=20120305002441"
    }

    this.getProduct = this.getProduct.bind(this);
    this.backToProducts = this.backToProducts.bind(this);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  componentWillReceiveProps(nextProps) {
   if(nextProps.currentState) {
     this.setState({
      products: nextProps.currentState.products})
   }
  }

  /**
   * Get the product that was clicked on
   *
   * @param {*} event
   * @memberof Products
   */
  getProduct(event) {
    const product = JSON.parse(event.target.dataset.product);
    this.setState({ showDetails: true, selectedProduct: product })
  }

  /**
   * Take users back to product
   *
   * @memberof Products
   */
  backToProducts() {
    this.setState({ showDetails: false,})
  }


  render() {
    return(
     <div style={{marginTop: "5%"}}>
       { this.state.showDetails ? 
           <ProductDetails 
            selectedProduct={this.state.selectedProduct}
            backToProducts={this.backToProducts}/>
          :
        <div>
          <h1 style={{textAlign: "center"}}>Watto’s Spaceship Emporium</h1>
          <div className="products-container">
            { this.state.products && this.state.products.map((product, index) => {
              product.image = this.state.image;
              return(
              <div className="product"
              key={index}
              >
              <img src={product.image}/>
              <h5>{product.name}</h5>
              <h6>{product.manufacturer}</h6>
              <h6>{product.class}</h6>
              <h6>{product.price}</h6>
            <button
              data-product={JSON.stringify(product)}
              onClick={this.getProduct}
              style={{width:"100px", height: "30px", margin:"3px" }}
              >Show details</button>
            </div>
              )
            })}  
          </div>
         </div>
      }  
     </div>
    )
  }
};

const stateToProps = (state) => {
  return {
    currentState: state
  }
}

export default connect(stateToProps, { getAllProducts })(Products);