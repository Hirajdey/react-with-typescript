import { render } from '@testing-library/react';
import React from 'react';

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            isOpen:false
        };
    }

    render(){
        return(
            <div>
                <button type="button" onClick={() => {this.setState((prevState)=>(
                    {isOpen:!prevState.isOpen}
                ))}}>2 Pizza(s)</button>  
                
                <div style={{display: this.state.isOpen === true ?'block':'none'}}>
                    <ul>
                        <li>Napoletana</li>
                        <li>Marinara</li>
                    </ul>
                </div>                      
            </div>
        )
    }
}

export default Cart


