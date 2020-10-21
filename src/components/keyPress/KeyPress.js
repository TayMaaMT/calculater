import React, {Component} from 'react';
import "./KeyPress.css"

class KeyPress extends Component {

    render() {
        return (
            <div className="button">
                <button className="top-row" name="all-clear" onClick={e => this.props.action(e)}>AC</button>
                <button className="top-row" name="-/+" onClick={e => this.props.action(e)}>+/-</button>
                <button className="top-row" name="%" onClick={e => this.props.action(e)}>%</button>
                <button className="top-col" name="/" onClick={e => this.props.action(e)}>/</button><br/>

                <button name="7" onClick={e => this.props.action(e)}>7</button>
                <button name="8" onClick={e => this.props.action(e)}>8</button>
                <button name="9" onClick={e => this.props.action(e)}>9</button>
                <button className="top-col" name="*" onClick={e => this.props.action(e)}>x</button><br/>

                <button name="4" onClick={e => this.props.action(e)}>4</button>
                <button name="5" onClick={e => this.props.action(e)}>5</button>
                <button name="6" onClick={e => this.props.action(e)}>6</button>
                <button className="top-col" name="-" onClick={e => this.props.action(e)}>-</button><br/>


                <button name="1" onClick={e => this.props.action(e)}>1</button>
                <button name="2" onClick={e => this.props.action(e)}>2</button>
                <button name="3" onClick={e => this.props.action(e)}>3</button>
                <button className="top-col" name="+" onClick={e => this.props.action(e)}>+</button><br/>


                <button className="zero" name="0" onClick={e => this.props.action(e)}>0</button>
                <button name="." onClick={e => this.props.action(e)}>.</button>
                <button className="top-col"  name="=" onClick={e => this.props.action(e)}>=</button>
            </div>
        );
    }
}


export default KeyPress;