import React from 'react';


class FilterForm extends React.Component {
    constructor(props) {
        super(props)


        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        e.preventDefault()

        switch(e.currentTarget.classList[0]) {
            case ("form-maxSeating"):
                this.props.fetchFilter("maxSeating", parseInt(e.currentTarget.value))
                break
            case ('form-minSeating'):
                this.props.fetchFilter("minSeating", parseInt(e.currentTarget.value))
                break
            default:
                break
        }
        
    }


    render() {
        return  (

            <form>

                <label >Max Seating</label>
                <input className={"form-maxSeating"} onChange={this.handleChange} type='text' ></input>
                <br></br>
                <label >Min Seating </label>
                <input className={"form-minSeating"} onChange={this.handleChange}type='text'></input>
                <br></br>

            </form>
        )
    }
}

export default FilterForm