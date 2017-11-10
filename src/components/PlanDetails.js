import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSpecificPlan } from '../actions/index.js';

class PlanDetails extends Component {
    

    render() {
        console.log('Hello there! Inside the render of PlanDetails');
        if (!this.props.specificPlan) {
            return <h2>Select a company</h2>;
        } else {
            return (
                <div>
                    <h1> Details for {this.props.specificPlan.company} </h1>
                </div>
            );
        }
    }
  componentDidMount() {
      const id = this.props.match.params.id;
      this.props.getSpecificPlan(id);
    }
}

const mapStateToProps = (state) => {
    return {
        specificPlan: state.specificPlan,
    };
};

export default connect(mapStateToProps, { getSpecificPlan: getSpecificPlan })(PlanDetails);