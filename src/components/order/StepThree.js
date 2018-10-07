import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';

class StepTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: '',
            show: true
        }
    }
  render() {
      const handleClick = (event) => {
          this.props.PickDrink(event.currentTarget.textContent)
      }
      const StepThreeChange = () => {
        this.props.StepThreeChange(this.state.show)
      }
      const BackStepToTwo = () => {
        this.props.BackStepToTwo(this.state.show)
      }
    return (
      <div className="">
        <h2>STEP 3</h2>
        <h5> Pick Dairy Type </h5>
        <div>
            <Button onClick={handleClick} color="primary"> 2% </Button>
            <Button onClick={handleClick} color="primary"> Skim </Button>
            <Button onClick={handleClick} color="primary"> Whole </Button>
            <Button onClick={handleClick} color="primary"> Lactose free </Button>
        </div>
        <div>
            <Button  onClick={BackStepToTwo} > Previous Step </Button>
            <Button onClick={StepThreeChange} > Next Step </Button>
        </div>
      </div>
    );
  }
}

export default StepTwo;
