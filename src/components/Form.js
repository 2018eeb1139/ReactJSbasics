import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            commment: '',
            password: '',
            bike: false,
            car: false,
            cycle: false,
            areo:''
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeCommnetHandler = (event) => {
        this.setState({
            commment: event.target.value
        })
    }

    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    changeBikeHandler = (event) => {
        this.setState({
            bikes: event.target.value
        })
    }

    changeGender = (event) => {
        this.setState({
            selectedOption: event.target.value
        })
    }

    changeVehicle = (event) => {
        this.setState({
            [event.target.name]:event.target.checked,
            areo:event.target.value
        })
        // console.log(event.target.value)
        // console.log(event.target.checked)
        // console.log(this.state.areo)
    }


    // clickHandler = (event) => {


    // }

    submitHandler = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.password} ${this.state.bikes} ${this.state.selectedOption} ${this.state.areo} ${this.state.commment}`)
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} onChange={this.changeUserNameHandler} />
                </div><br />
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password} onChange={this.changePasswordHandler} />
                </div><br />
                <div>
                    <label htmlFor="bikes">Bikes</label>
                    <select name="bikes" id="bike" value={this.state.bikes} onChange={this.changeBikeHandler}>
                        <option value="select" >Select Your Favourite Bike</option>
                        <option value="ktm">KTM</option>
                        <option value="r15">R-15</option>
                        <option value="gixxer">Gixxer</option>
                        <option value="yamaha">Yamaha</option>
                        <option value="apache">Apache RTR</option>
                    </select>
                </div><br />
                <div>
                    <input type="radio" id="male" name="gender" value="Male" checked={this.state.selectedOption === "Male"} onChange={this.changeGender} />
                    <label htmlfor="male">Male</label><br />
                    <input type="radio" id="female" name="gender" value="Female" checked={this.state.selectedOption === "Female"} onChange={this.changeGender} />
                    <label htmlfor="female">Female</label><br />
                    <input type="radio" id="others" name="gender" value="Others" checked={this.state.selectedOption === 'Others'} onChange={this.changeGender} />
                    <label htmlfor="others">Others</label><br />
                </div><br />
                <div>
                    <input type="checkbox" id="vehicle1" name="bike" value="bike" checked={this.state.bike}  onChange={this.changeVehicle} />
                    <label htmlfor="vehicle1">I have a Bike</label><br />
                    <input type="checkbox" id="vehicle2" name="car" value="car" checked={this.state.car} onChange={this.changeVehicle} />
                    <label htmlfor="vehicle2">I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="cycle" value="cycle" checked={this.state.cycle} onChange={this.changeVehicle} />
                    <label htmlfor="vehicle3">I have a MotorCycle</label><br />
                </div><br />
                <div>
                    <label htmlFor="comments">Comments</label>
                    <textarea type="text" value={this.state.commment} onChange={this.changeCommnetHandler} />
                </div><br />
                <button onClick={this.clickHandler}>Sumbit</button>
            </form>
        )
    }
}

export default Form
