import React from 'react';
import '../css_components/EnergyPlans.css';

const Plan = ({ plan, index }) => {
    return (
        <p className="PlanLayout">
            <h4 className="PlanText"><u>{`Plan ${index+1}`}</u></h4>
            <h3 className="PlanText">{`Company: ${plan.company}`}</h3>
            <p className="PlanText">{`Plan Details: ${plan.planDetail}`}</p>
            <p className="PlanText">{`Price: ${plan.price}`}</p>
            <p className="PlanText">{`Contract: ${plan.contract} months`}</p>
            <p className="PlanText">{`Rating: ${plan.rating} stars`}</p>
        </p>
    );
};

export default Plan;