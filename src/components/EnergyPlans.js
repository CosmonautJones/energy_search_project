import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Plan from './Plan';
import { getPlans } from '../actions';
import '../css_components/EnergyPlans.css';


const apiURL =
	'http://api.powertochoose.org/api/PowerToChoose/plans?zip_code=78364';

class EnergyPlans extends Component {
	constructor() {
		super();
		this.state = {
			plans: []
		};
	}

  getPlans() {
    fetch(
      apiURL,
			{
        headers: {
          'Content-Type': 'application/json'
				}
			}
		)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ plans: data.data });
      console.log('state of Energy', this.state.plans);
    });
	};
  
  componentDidMount() {
    this.getPlans();
  }

	render() {
		return (
			<div className="container1">
				<div className="container2"><p className ="PlanList">
                    {this.state.plans.map((plan, i) => {
                        return (
                            <Plan
                                key={i} 
                                index={i} 
                                data={plan} 
                            />
                        );
                    })}
                </p></div>
              <Link className="Link" to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plans,
    };
};

export default connect(mapStateToProps, { getPlans: getPlans })(EnergyPlans);