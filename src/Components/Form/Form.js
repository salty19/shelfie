import React, {Component} from 'react'
import '../../index.css'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    // handleImg(url) {
    //     this.setState({ name: url })
    // }

    // handleName(name) {
    //     this.setState({ price: name })
    // }

    // handlePrice(price) {
    //     this.setState({ imgurl: price })
    // }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddButton() {

    }

    handleCancelButton() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const {name, price, imgurl} = this.state
        this.props.addProduct(name, price, imgurl)
    }


    render() {

        return (

            <form onSubmit={e => this.handleSubmit(e)} className='form'>
                
                <div className='img-preview'> IMG Preview </div>
                <div className='input-boxes'>

                    <p className='form-element'> Image URL: </p>
                    <input className='form-element'
                           onChange={this.handleChange} name='imageurl' />

                    <p className='form-element'> Product Name: </p>
                    <input className='form-element' 
                           onChange={this.handleChange} name='name' />

                    <p className='form-element'> Price: </p>
                    <input className='form-element' 
                           onChange={this.handleChange} name='price' />
                    
                </div>
                <div className='buttons'>
                        <button onClick={this.handleAddButton}> Cancel </button>
                        <button type='submit' onClick={this.handleCancelButton}> Add to Inventory </button>   
                </div>
            </form>

        )
    }
}