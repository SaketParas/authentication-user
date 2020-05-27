import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h4>You have been logged out</h4>
                <Link to="/">Login again</Link>
             
            </div>
        )
    }
}

export default Logout
