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
      const StepFourChange = () => {
        this.props.StepFourChange(this.state.show)
      }
      const BackStepToThree = () => {
        this.props.BackStepToThree(this.state.show)
      }
    return (
      <div className="">
        <h2>STEP 4</h2>
        <h5> Pick Syrup </h5>
        <div>
            <Button onClick={handleClick} color="primary"> Sugar </Button>
            <Button onClick={handleClick} color="primary"> Vanilla </Button>
            <Button onClick={handleClick} color="primary"> Caramel </Button>
            <Button onClick={handleClick} color="primary"> Sweetner </Button>
        </div>
        <div>
            <Button onClick={BackStepToThree}  > Previous Step </Button>
            <Button onClick={StepFourChange} > Set Order </Button>
        </div>
      </div>
    );
  }
}

export default StepTwo;
