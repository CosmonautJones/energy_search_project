import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Plan from './Plan';
import { getPlans } from '../actions';
import '../css_components/EnergyPlans.css';

class EnergyPlans extends Component {
    render() {
        return(
            <div className="PlanPage">
                <h1 className="PlanPage--title"> Shop. Compare. Choose. </h1>
                <p className ="PlanList">
                    {this.props.plans.map((plan, i) => {
                        return (
                            <Plan
                                key={i} 
                                index={i} 
                                plan={plan} 
                            />
                        );
                    })}
                </p>
              <Link className="Link" to="/">Home</Link>
            </div>
        );
    }
    componentDidMount() {
        this.props.getPlans();
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plans,
    };
};

export default connect(mapStateToProps, { getPlans: getPlans })(EnergyPlans);