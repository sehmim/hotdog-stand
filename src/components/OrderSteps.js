import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import StepOne from "./order/StepOne";
import StepTwo from "./order/StepTwo";
import StepThree from "./order/StepThree";
import StepFour from "./order/StepFour";




class OrderSteps extends Component {
    state = {
        size: '',
        bun: '',
        susage: '',
        Condiments: '',
        StepNumber: '0',
        final : false
    }
    handleSize = (data) => {
        this.setState({
            size : data
        })
    }
    
    PickDrink = (data) => {
        this.setState({
            bun : data
        })
    }

    PickMilk = (data) => {
        this.setState({
            susage : data
        })
    }

    PickSyrup = (data) => {
        this.setState({
            Condiments : data
        })
    }


    StepOneChange = () => {
        if (this.state.size === '') {
            alert('Pick A Size')
        }
        else if (this.state.size != '') {
            this.setState({
                StepNumber : '1'
            }) 
        }
    }

    StepTwoChange = () => {
        if (this.state.bun === '') {
            alert('Pick A Bun')
        }
        else if (this.state.size != '') {
            this.setState({
                StepNumber : '2'
            })
        }

    }

    StepThreeChange = () => {
        this.setState({
            StepNumber : '3'
        })
    }

    StepFourChange = () => {
        this.setState({
            StepNumber : '4'
        })     
    }

    // BACK STEPS
    BackStepToOne = () => {
        this.setState({
            StepNumber : '0'
        })  
        }
    BackStepToTwo = () => {
        this.setState({
            StepNumber : '1'
        })   
    }
    BackStepToThree = () => {
        this.setState({
            StepNumber : '2'
        })   
    }
    BackStepToFour = () => {
        this.setState({
            StepNumber : '3'
        })   
    }

    render() {



    return (
      <div className="container">

      { 
          this.state.StepNumber === '4' ? 
            null
          :
          <div className="jumbotron">
        <h2 className="display-5 text-center"> Let's Order Some HotDogs </h2>
          <h3> Order </h3>
              <div> Size : { this.state.size } </div>
              <div> Bun Type : { this.state.bun } </div>
              <div> Susage : { this.state.susage } </div>
              <div> Condiments : { this.state.Condiments } </div>
          </div>
      }

        <div>
            {

            this.state.StepNumber === '0' ? 
            <StepOne PickSize={this.handleSize} StepOneChange = {this.StepOneChange} />
            :
            this.state.StepNumber === '1' ? 
            <StepTwo PickDrink = { this.PickDrink } StepTwoChange = {this.StepTwoChange } BackStepToOne = {this.BackStepToOne} ></StepTwo>
            :
            this.state.StepNumber === '2' ? 
            <StepThree PickDrink = { this.PickMilk } StepThreeChange = {this.StepThreeChange  } BackStepToTwo = {this.BackStepToTwo}></StepThree>
            :
            this.state.StepNumber === '3' ? 
            <StepFour PickDrink = { this.PickSyrup } StepFourChange = {this.StepFourChange } BackStepToThree = {this.BackStepToThree}></StepFour>
            :
            <div>

                <h1> Order Overview</h1>
                <h5> Your Getting A </h5>
                <p>       { this.state.size }
                     Sized HotDog. <br />
                    { this.state.bun } Bun
                    With  { this.state.susage } 
                     Susage ( { this.state.Condiments } )
                </p>

                <button onClick={ this.BackStepToFour } > Change Something </button>
            </div>
            }
        </div>    
      </div>
    );
  }
}

export default OrderSteps;
