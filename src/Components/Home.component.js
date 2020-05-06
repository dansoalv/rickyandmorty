import React, {Component } from 'react';
import Characters from "./Characters.component";

class HomeComponent extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <br/>
                            <h1>HEY, DID YOU EVER WANT TO HOLD A TERRY FOLD?</h1>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <Characters/>
                </React.Fragment>
            </>
        );
    }
}


export default HomeComponent