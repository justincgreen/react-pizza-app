import { Link } from 'react-router-dom';
import pizzaLogo from '../images/pizza-logo.png';

const OrderSummary = () => {
	return (
		<div className="order-summary text-center">
			<h1 className="text-center">Your pizza is in the oven!</h1>
			<div className="mb-3"><img src={pizzaLogo} alt="Pizza logo" className="img-fluid rotate" /></div>
			<Link to="/" className="btn btn-success">Back to home</Link>
		</div>
	)
}

export default OrderSummary;