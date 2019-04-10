import React, { Component } from 'react'
import { register } from '../../../store/Actions/actions'
import '../../../../src/style.css'



class Userform extends Component {

    state = {
        username: '',
        password: '',
    }

    
    registerHandler = async () => {
        await register(this.state)     
        alert('Registered Successfully');
        this.props.history.push('/login')
    }

    render() {
        // const style = {
        //     margin: 'auto',
        //     border: '3px solid pink',
        //     width: '20rem',
        //     marginTop: '2rem',
        //     padding: '1rem',
        //     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        //     textAlign:'center'
        // }
        return (
            <div className="cardStyle">
                <h3>User Input</h3>
                <form>
                <input placeholder="user name" type="text" onChange={(event) => this.setState({ username: event.target.value })} /><br></br>
                <input placeholder="password" type="password" onChange={(event) => this.setState({ password: event.target.value })} /><br></br><br></br>
                </form>
                <hr />
                <button onClick={() => this.registerHandler(this.state.username, this.state.password)}>Register</button>
            </div>
        )
    }

}


export default Userform

