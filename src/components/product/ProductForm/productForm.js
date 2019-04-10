import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../../store/Actions/actions'



class Productform extends Component {


    state = {
        name: '',
        description: '',
        price: '',
        discount: '',
        category: '',
        id: '',
        addedBy: localStorage.getItem("userId"),

    }

    componentDidMount()
    {
        if (!localStorage.getItem("token")) {
            alert("register or login first!")
            this.props.history.push("/login")
        }
    }
    

    render() {
        
        
        return (

            <div className="cardStyle">
                <h3>Product Input</h3>
                <input placeholder="name" onChange={(event) => this.setState({ name: event.target.value })} /><br></br>
                <input placeholder="description" onChange={(event) => this.setState({ description: event.target.value })} /><br></br>
                <input placeholder="price" onChange={(event) => this.setState({ price: event.target.value })} /><br></br>
                <input placeholder="discount" onChange={(event) => this.setState({ discount: event.target.value })} /><br></br>
                <input placeholder="category" onChange={(event) => this.setState({ category: event.target.value })} /><br></br>
                <hr />
                <button onClick={() => this.props.addNewProduct(this.state)}>Add Product</button>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addNewProduct: (data) => dispatch(addProduct(data))
    }
}


export default connect(null, mapDispatchToProps)(Productform);

