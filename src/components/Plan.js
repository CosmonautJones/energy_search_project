import React from 'react';
import '../css_components/EnergyPlans.css';

const Plan = ({ plan, index }) => {
    return (      
        <div className="PlanLayout">
            <h4><u>{`Plan ${index+1}`}</u></h4>
            <h4>{`Company: ${plan.company}`}</h4>
            <p>{`Fixed Rate: ${plan.fixedRate}`}</p>
            <p>
                {`Price: 500kWh @ $${plan.price['500kWh']}`} <br/>
                {`Price: 1000kWh @ $${plan.price['1000kWh']}`}<br/>
                {`Price: 2000kWh @ $${plan.price['2000kWh']}`}
            </p>
            <p>{`Contract: ${plan.contract} months`}</p>
            <p>{`Rating: ${plan.rating} stars`}</p>
            <input type="checkbox" id="plan" className="selected-plan" value="plan" />
            <button type="submit">Select This Plan</button>
        </div>
    );
};

export default Plan;