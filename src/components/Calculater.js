import React, { Component } from 'react';
import "./Calculater.css"
import Result from './result/Result';
import KeyPress from './keyPress/KeyPress';

class Calculater extends Component {
    state={
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
      }
    inputDigit=digit=> {
        const { displayValue, waitingForSecondOperand } = this.state;
      
        if (waitingForSecondOperand === true) {
            this.setState({
                displayValue:digit,
                waitingForSecondOperand:false
            })
        } else {
            this.setState({displayValue:displayValue === '0' ? digit : displayValue + digit})
        }
      } 
    inputDecimal= dot =>{
        const { displayValue, waitingForSecondOperand } = this.state;
        if (waitingForSecondOperand === true) {
            this.setState({
                displayValue:"0.",
                waitingForSecondOperand:false
            }) }
        if (!displayValue.includes(dot)) {
            this.setState({
                displayValue:displayValue + dot
            }) }
      }   

    calculate =(firstOperand, secondOperand, operator)=> {
        
        if (operator === '+') {
            this.setState({
                displayValue:`${firstOperand} +${operator}+ ${secondOperand}`
            })
          return firstOperand + secondOperand;
        } else if (operator === '-') {
          return firstOperand - secondOperand;
        } else if (operator === '*') {
          return firstOperand * secondOperand;
        } else if (operator === '/') {
          return firstOperand / secondOperand;
        }else if (operator === '%') {
            return firstOperand / secondOperand;
        }else if (operator === '-/+') {
            return secondOperand*-1;
        }
        return secondOperand;
      }
      
    handleOperator =nextOperator=> {
        const { firstOperand, displayValue, operator,waitingForSecondOperand } = this.state
        const inputValue = parseFloat(displayValue);
        
        if (operator && waitingForSecondOperand)  {
            this.setState({
                operator :nextOperator
                
            })}
        if (firstOperand == null && !isNaN(inputValue)) {
            this.setState({
                firstOperand : inputValue
            })
        } else if (operator) {
          const result = this.calculate(firstOperand, inputValue, operator);
            this.setState({
                displayValue:`${parseFloat(result.toFixed(7))}`,
                firstOperand:result
            })
        }
        this.setState({
            waitingForSecondOperand:true,
            operator:nextOperator
        })
      }

  
     resetCalculator=()=> {
         this.setState({
            displayValue:"0",
            firstOperand:null,
            waitingForSecondOperand:false,
            operator:null

         })
         } 
     handelSign=()=>{
         const {displayValue}=this.state;
            this.setState({
                displayValue:displayValue*(-1)
            })    
          }
 action = (event)=>{
    const {target}=event;
    const {name}=target;
    if (!target.matches('button')) {
      return;
    }
    switch (name) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
      case '=':
          console.log(name);
        this.handleOperator(name);
        break;
      case '.':
        this.inputDecimal(name);
        break;
      case 'all-clear':
        this.resetCalculator();
        break;
      case '-/+':
          this.handelSign();
        break;  
      default:
        if (Number.isInteger(parseFloat(name))) {
          this.inputDigit(name);
        }
    }
 }     

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <Result result={this.state.displayValue}/>
                    <KeyPress action={this.action}/>
                </div>
            </div>
        );
    }
}

export default Calculater;