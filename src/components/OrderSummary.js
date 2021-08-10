import { Link, Redirect } from 'react-router-dom';
import pizzaLogo from '../images/pizza-logo.png';

const OrderSummary = ({orderSummary}) => {
	// Check if orderSummary variable is set to an empty object (which is our initial state) then redirect to order page
	// This only allows active orders to view the order summary page if condition is true 
	if(Object.keys(orderSummary).length === 0) {
		return <Redirect to="/order" />
	}
	
	return (
		<div className="order-summary text-center">
			<h1 className="text-center">Your pizza is in the oven!</h1>
			<div className="mb-3"><img src={pizzaLogo} alt="Pizza logo" className="img-fluid rotate" /></div>
			<div className="order-summary-panel">
				<h2 className="mb-3">Order Summary:</h2>
				<h6>Order #: <span>{orderSummary.id}</span></h6>
				<h6>Customer name: <span>{orderSummary.name}</span></h6>
				<h6>
					Pizza:&nbsp;
					<span>
						{orderSummary.pizzaSize}&nbsp;
						{orderSummary.pizza && orderSummary.pizza.toLowerCase()} w/ 
						{orderSummary.crust && orderSummary.crust.toLowerCase()}
					</span>
				</h6>
				<h6>
					Extra Toppings:&nbsp;
					<span>
						{!orderSummary.mushrooms && !orderSummary.olives ? <span>None</span> : ''}
						{orderSummary.mushrooms && `${orderSummary.mushrooms} `}
						{orderSummary.olives  && orderSummary.olives}
					</span>
				</h6>
				<h6>Total: <span>${orderSummary.total && orderSummary.total}</span></h6>
				<Link to="/" className="btn btn-success">Back to home</Link>
			</div>
		</div>
	)
}

export default OrderSummary;