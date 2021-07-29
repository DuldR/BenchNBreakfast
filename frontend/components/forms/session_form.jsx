import React from 'react'
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = { username: "", email: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addData = this.addData.bind(this)
        this.displayHeader = this.displayHeader.bind(this)
        this.listErrors = this.listErrors.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);

        if (this.props.formType === "signup") { 
            this.props.signup(user)
        } else {
            this.props.login(user)
        }
            
    }

    addData(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-username"):
                this.setState( { username: e.currentTarget.value } )
                break
            case ("form-password"):
                this.setState( { password: e.currentTarget.value })
                break
            default:
                break
        }

    }

    listErrors() {


        let errors = this.props.errors.map((err, idx) => {
            return <li key={"err-" + idx}>{err}</li>
        })


        return errors
    }

    displayHeader() {

        if (this.props.formType === "login") {
            return <div className="signup-form">
                Log In Form
                <Link to='/signup'>No Account? Click here to Sign Up</Link>
            </div>
        } else {
            return <div className="signup-form">
                Sign Up Form
                <Link to='/login'>Already have an account? Click here to log in</Link>
            </div>
        }

    }


    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className="user-form">
                {this.displayHeader()}
                <ul>
                    {this.listErrors()}
                </ul>
                <label>Username:</label>
                <input className="form-username" onChange={this.addData} type='text'></input>
                <label>Password</label>
                <input className="form-password" onChange={this.addData} type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default SessionForm