import React, { Component } from 'react';


// import StepOne from "./order/StepOne";
// import StepTwo from "./order/StepTwo";
// import StepThree from "./order/StepThree";
// import StepFour from "./order/StepFour";




class OrderSteps extends Component {
    state = {
        size: '',
        drinkName: '',
        milk: '',
        syrup: '',
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
            drinkName : data
        })
    }

    PickMilk = (data) => {
        this.setState({
            milk : data
        })
    }

    PickSyrup = (data) => {
        this.setState({
            syrup : data
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
        if (this.state.drinkName === '') {
            alert('Pick A Drink')
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
        <h2 className="display-5 text-center"> Order Some Coffee </h2>
          <h3> Order </h3>
              <div> Size: { this.state.size } </div>
              <div> Drink: { this.state.drinkName } </div>
              <div> Milk: { this.state.milk } </div>
              <div> syrup: { this.state.syrup } </div>
          </div>
      }

        <div>
            Order Page
        </div>    
      </div>
    );
  }
}

export default OrderSteps;
