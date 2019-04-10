import React, { Component } from 'react'
import { connect } from 'react-redux';


class Productcard extends Component {


    render() {
        return (
            <div className="cardStyle">
                <h3>Product Details</h3>
                <p>{this.props.name} </p>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <p>{this.props.discount}</p>
                <p>{this.props.category}</p>
                <hr/>
                <button onClick={() => this.props.deleted(this.props.id)}>Delete Product</button>
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        id: state.rootProducts.productArray.id
    }

};


export default connect(mapStateToProps, null)(Productcard)