import React from 'react';
import '../css_components/EnergyPlans.css';

const Plan = ({ data, index }) => {
	return (
		<div className="PlanLayout">
			<h4>
				<u>{`Plan ${index + 1}`}</u>
			</h4>
			<h4>{`Company: ${data.company_name}`}</h4>
			<img className="CompanyLogo" src={data.company_logo} />
			<h4>{`Zip Code: ${data.zip_code}`}</h4>
			<h4>{`Rate Type: ${data.rate_type}`}</h4>
			<p>
				{`Price: 500kWh @ $${data.price_kwh500}`} <br />
				{`Price: 1000kWh @ $${data.price_kwh1000}`} <br />
				{`Price: 2000kWh @ $${data.price_kwh2000}`}
			</p>

			{/* "price_kwh500": 11.3,
            "price_kwh1000": 10.1,
            "price_kwh2000": 9.5, */}

			{/* <p>{`Fixed Rate: ${plan.fixedRate}`}</p>
            <p>{`Contract: ${plan.contract} months`}</p>
            <p>{`Rating: ${plan.rating} stars`}</p> */}
			<input type="checkbox" id="plan" className="selected-plan" value="plan" />
		</div>
	);
};

export default Plan;
