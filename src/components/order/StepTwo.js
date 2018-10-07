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
      const StepTwoChange = () => {
        this.props.StepTwoChange(this.state.show)
      }
      const BackStepToOne = () => {
        this.props.BackStepToOne(this.state.show)
      }

    const drinks = [
        { name: 'Late', price: 3.99 },
        { name: 'Capucino', price: 3.59 },
        { name: 'Americano', price: 2.99 },
        { name: 'Coffee', price: 1.99 },
    ]


    return (
      <div className="">
        <h2>STEP 2</h2>
        <h5> Pick a Drink </h5>
        <div>
        {
          drinks.map(( item, index ) => {
            return(
              <div>
                <Button onClick={handleClick} color="primary"> { item.name }</Button> <span></span>
              </div>
            )
          })
        }
                <div>
            <Button onClick={BackStepToOne}> Previous Step </Button>
            <Button  onClick={StepTwoChange} > Next Step </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default StepTwo;
