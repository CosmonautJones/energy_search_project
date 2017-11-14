import React from 'react';
import '../css_components/EnergyPlans.css';

const Plan = ({ plan, index }) => {
    return (      
        <div className="PlanLayout">
            <h4><u>{`Plan ${index+1}`}</u></h4>
            <h4>{`Company: ${plan.company}`}</h4>
            <p>{`Plan Details: ${plan.planDetail}`}</p>
            <p>{`Price: ${plan.price}`}</p>
            <p>{`Contract: ${plan.contract} months`}</p>
            <p>{`Rating: ${plan.rating} stars`}</p>
            <input type="checkbox" id="plan" className="selected-plan" value="plan" />
            <button type="submit">Select This Plan</button>
        </div>
    );
};

export default Plan;