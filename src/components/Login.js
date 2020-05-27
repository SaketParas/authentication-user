import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        //logic
        if (username == "A" && password == "B") {
            localStorage.setItem("token", "myrandom123")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to="/Admin" />
        }

        return (
            <div>
                <h1>Login</h1>
                <div class="card m-5 col-6">
                    <div class="card-body">
                        <form onSubmit={this.submitForm}>
                            <div class="card-group">

                                <div class="card ml-3">
                                    <input type="text" class="form-control" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                                </div>
                                <div class="card ml-3">
                                    <input type="password" class="form-control" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                                </div>
                                <div class="card ml-3">
                                    <button type="submit" class="btn btn-outline-info">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
