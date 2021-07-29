import React from 'react';
import { Route, Redirect } from 'react-router-dom'


class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "", lat: this.props.lat, long: this.props.lng, seats: 0, photoFile: null, photoUrl: null }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addBench = this.addBench.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let bench = { bench: this.state }
        const formData = new FormData();

        formData.append('bench[description]', this.state.description)
        formData.append('bench[lat]', this.state.lat)
        formData.append('bench[long]', this.state.long)
        formData.append('bench[seats]', this.state.seats)
        if (this.state.photoFile) {
            formData.append('bench[photo]', this.state.photoFile)
        }

        this.props.createBench(formData).then(
            this.props.history.push('/')
        )

    }

    handleFile(e) {

        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        

        this.setState({photoFile: e.currentTarget.files[0] })
    }

    // My methodoloy, they provided a better way though
    addBench(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-description"):
                this.setState( {description: e.currentTarget.value} )
                break
            case ('form-seats'):
                this.setState( {seats: e.currentTarget.value} )
                break
            default:
                break
        }

    }

    update(property) {

        return e => this.setState({[property]: e.target.value});

    }


    render() {

        const preview = this.state.photoUrl ?  <img src={this.state.photoUrl} /> : null;


        return (
            <form onSubmit={this.handleSubmit} className="form-story" id="story-submit">

                <label >Title: </label>
                <input className="form-story-title" type='text' onChange={this.update("title")}></input>

                <button>Submit</button>

            </form>
        )
    }


}

export default BenchForm