import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';

class StepOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: '',
            show: true
        }
    }
  render() {
      const handleClick = (event) => {
          this.props.PickSize(event.currentTarget.textContent)
      }
      const StepOneChange = () => {
        this.props.StepOneChange(this.state.show)
      }


    return (

        
      <div className="">
        <h2>STEP 1</h2>
        <h5> Pick a Size </h5>
        <div>
            <Button onClick={handleClick} color="primary"> Small </Button>
            <Button onClick={handleClick} color="primary"> Medium </Button>
            <Button onClick={handleClick} color="primary"> Large </Button>
            <Button onClick={handleClick} color="primary"> XT-Large </Button>
        </div>
        <div>
            <Button onClick={StepOneChange} > Next Step </Button>
        </div>
      </div>
    );
  }
}

export default StepOne;
