import React, { Component } from 'react';
import ProductCard from '../ProductCard/productCard';
import { connect } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../../store/Actions/actions';
// import axios from 'axios'


class Products extends Component {

    componentDidMount() {
        this.props.getAllProducts();
    }
    render() {
        if (this.props.products) {
            return (
                <>
                    {this.props.products.map((product, index) => {
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
                    })}
                </>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        products: state.rootProducts.productArray,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        deleteProduct: (id) => dispatch(deleteProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)