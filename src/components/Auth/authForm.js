import React, { Component } from 'react'
import { login } from '../../store/Actions/actions'
import { withRouter } from 'react-router-dom';

class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    loginHandler = () => {
        login(this.state)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.id);  
            })
            .catch(err => {
                alert("Authentication Failed!");
                this.props.history.push('/login');
            });
            this.props.history.push('/ProductsList');
    }
    render() {
        return (
            <div className="cardStyle" >
            <h3>Login</h3>
                <form>
                    <input placeholder="username" type="text" onChange={(event) => this.setState({ username: event.target.value })} />
                    <input placeholder="password" type="password" onChange={(event) => this.setState({ password: event.target.value })} /><br></br><br></br>
                    <button onClick={() => this.loginHandler()}>Login</button>
                </form>
                <hr/>
            </div>
        )
    }
}

export default withRouter(Auth);

