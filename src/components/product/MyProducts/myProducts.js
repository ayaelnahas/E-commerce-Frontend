import React, { Component } from 'react';
import ProductCard from '../ProductCard/productCard';
import { connect } from 'react-redux'
import { getMyProducts,deleteProduct} from '../../../store/Actions/actions';



class myProducts extends Component {

    componentDidMount() {
        this.props.getMyProducts(localStorage.getItem("userId"));
    }
    render() {
        let products = null;
        if(this.props.products)
        {
            products= this.props.products.map((product, index) => {
                return (
                    <ProductCard
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        discount={product.discount}
                        category={product.category}
                        id={product._id}
                        key={product._id}
                        deleted={() => this.props.deleteProduct(product._id)}
                    
                    ></ProductCard>
                )
            });
        }
        return(
                <>
                {products}
                </>
            );
    }
}


const mapStateToProps = state => {
    return {
        products: state.rootProducts.myProductArray
    }

};

const mapDispatchToProps = dispatch => {
    return {
        getMyProducts: (userId) => dispatch(getMyProducts(userId)),
        deleteProduct: (id) => dispatch(deleteProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(myProducts)