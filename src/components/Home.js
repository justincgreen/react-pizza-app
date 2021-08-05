import { Link } from 'react-router-dom';
import pizzaSlice from '../images/pizza-slice.png';
import veggiePizza from '../images/veggie-pizza.jpg';
import pepperoniPizza from '../images/pepperoni-pizza.jpg';
import cheesePizza from '../images/cheese-pizza.jpg';

const Home = () => {
	return (
		<div>
			<div className="text-center">
				<h1>Feeling Hungry?</h1>
				<div><img src={pizzaSlice} alt="Pizza Slice" className="rotate" /></div>
				<Link to="/order" className="btn btn-success mt-4">Order a pizza</Link>	
			</div>	
			
			<div className="row mt-3">
				<div className="col-md-12">
					<h2>Favorites</h2>
				</div>
				<div className="col-md-4">
					<div className="featured">						
						<img src={veggiePizza} alt="pizza" className="veggie-pizza featured-img" />
						<h4 className="mt-2">Veggie Pizza</h4>
						<Link to="/order" className="btn btn-success mt-2">Order Now</Link>	
					</div>
				</div>
				<div className="col-md-4">
					<div className="featured">
						<img src={pepperoniPizza} alt="pizza" className="pepperoni-pizza featured-img" />
						<h4 className="mt-2">Pepperoni Pizza</h4>
						<Link to="/order" className="btn btn-success mt-2">Order Now</Link>						
					</div>
				</div>
				<div className="col-md-4">
					<div className="featured">
						<img src={cheesePizza} alt="pizza" className="cheese-pizza featured-img" />
						<h4 className="mt-2">Cheese Pizza</h4>
						<Link to="/order" className="btn btn-success mt-2">Order Now</Link>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;