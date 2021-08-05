import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import veggiePizza from '../images/veggie-pizza.jpg';
import pepperoniPizza from '../images/pepperoni-pizza.jpg';
import cheesePizza from '../images/cheese-pizza.jpg';

const Order = ({
	orders, setOrders, name, setName, 
	pizzaSize, setPizzaSize, pizzaSizePrice, setPizzaSizePrice, 
	pizza, setPizza, pizzaTypePrice, setPizzaTypePrice, 
	crust, setCrust, crustPrice, setCrustPrice,
	mushrooms, setMushrooms, mushroomsPrice, setMushroomsPrice, 
	olives, setOlives, olivesPrice, setOlivesPrice, 
	baseTotal, setBaseTotal
}) => {
	const history = useHistory();
	const [error, setError] = useState('');
	
	// Form Submit
	const addOrder = (e) => {
		e.preventDefault();
		
		if(name === '') {
			setError('🚫 Please enter your name');
			// Clear error message after 2 seconds
			setTimeout(() => { 
			  setError('');
			}, 2000);
		}else {
			// create order object
			const order = {
				id: Date.now(),
				name: name,
				pizzaSize: pizzaSize,
				pizza: pizza,
				crust: crust,
				mushrooms: mushrooms,
				olives: olives,
				total: baseTotal + pizzaSizePrice + pizzaTypePrice + crustPrice + mushroomsPrice + olivesPrice
			}
			
			// Reset elements on form submit
			setOrders([...orders, order]); // use spread operator to copy array
			setName('');
			setPizzaSize('Medium');
			setPizza('Veggie');
			setCrust('Thick Crust');
			setMushrooms('');
			setOlives('');
			setPizzaSizePrice(0);
			setPizzaTypePrice(2);
			setCrustPrice(0);
			setMushroomsPrice(0);
			setOlivesPrice(0);
			// Uncheck checkboxes
			const checkboxes = document.querySelectorAll('.checkbox');
			checkboxes.forEach((checkbox) => {
				checkbox.checked = false						
			});
			
			// Simulate waiting for order to submit
			setTimeout(() => {
				history.push('/ordersummary');
			}, 300);			
		}
	}
	
	// Pizza size toggle
	const pizzaSizeToggle = (e) => {
		setPizzaSize(e.target.value);
		if(e.target.value === 'Large') {
			setPizzaSizePrice(2)
		}else if(e.target.value === 'Medium') {
			setPizzaSizePrice(0);
		}
	}
	
	// Pizza type toggle
	const pizzaTypeToggle = (e) => {
		setPizza(e.target.value);
		if(e.target.value === 'Veggie') {
			setPizzaTypePrice(2)
			document.querySelector('.veggie-pizza-img').style.display = 'block';
			document.querySelector('.pepperoni-pizza-img').style.display = 'none';
			document.querySelector('.cheese-pizza-img').style.display = 'none';
		}
		if(e.target.value === 'Pepperoni') {
			setPizzaTypePrice(3);
			document.querySelector('.pepperoni-pizza-img').style.display = 'block';
			document.querySelector('.veggie-pizza-img').style.display = 'none';			
			document.querySelector('.cheese-pizza-img').style.display = 'none';
		}
		if(e.target.value === 'Cheese') {
			setPizzaTypePrice(1);
			document.querySelector('.cheese-pizza-img').style.display = 'block';
			document.querySelector('.veggie-pizza-img').style.display = 'none';			
			document.querySelector('.pepperoni-pizza-img').style.display = 'none';
		}
	}
	
	// Pizza crust toggle
	const pizzaCrustToggle = (e) => {
		setCrust(e.target.value);
		
		if(e.target.value === 'Stuffed Crust') {
			setCrustPrice(2);
		}else {
			setCrustPrice(0);
		}
	}
	
	// Mushrooms toggle
	const mushroomToggle = (e) => {
		if(e.target.value === '') {
			setMushrooms('Mushrooms');
			setMushroomsPrice(1);
		}else {
			setMushrooms('');
			setMushroomsPrice(0);
		}
	}
	
	// Olives toggle
	const oliveToggle = (e) => {
		if(e.target.value === '') {
			setOlives('Olives');
			setOlivesPrice(1);
		}else {
			setOlives('');
			setOlivesPrice(0);
		}
	}
	
	useEffect(() => {
		// save data to local storage
		localStorage.setItem('orderlist', JSON.stringify(orders)); // convert our objects into a string so we can save into local storage 
	},[orders]);
	
	return (
		<div className="order-content">
			<h2>Create Your Pizza</h2>
			<form onSubmit={addOrder}>
				<label>Name:</label><br />
				<input type="text" placeholder="Enter Your Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
				<br />
				<label>Size:</label><br/>
				<select className="form-control" value={pizzaSize} onChange={pizzaSizeToggle}>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
				</select>
				<br />
				
				<div className="pizza-options">
					<img src={veggiePizza} alt="pizza" className="pizza-img veggie-pizza-img" />
					<img src={pepperoniPizza} alt="pizza" className="pizza-img pepperoni-pizza-img" />
					<img src={cheesePizza} alt="pizza" className="pizza-img cheese-pizza-img" />
				</div>
				
				<label>Pizza:</label><br />
				<select className="form-control" value={pizza} onChange={pizzaTypeToggle}>
					<option value="Veggie">Veggie</option>
					<option value="Pepperoni">Pepperoni</option>
					<option value="Cheese">Cheese</option>
				</select>
				<br />
				<label>Crust:</label><br />
				<select className="form-control" value={crust} onChange={pizzaCrustToggle}>
					<option value="Thick Crust">Thick Crust</option>
					<option value="Thin Crust">Thin Crust</option>
					<option value="Stuffed Crust">Stuffed Crust</option>
				</select>
				<br />
				<label>Extra Toppings</label><br/>
				<label><input type="checkbox" className="checkbox" value={mushrooms} onChange={mushroomToggle} /> Mushrooms</label><br />
				<label><input type="checkbox" className="checkbox" value={olives} onChange={oliveToggle} /> Olives</label><br />
				Total: ${baseTotal + pizzaSizePrice + pizzaTypePrice + crustPrice + mushroomsPrice + olivesPrice} <br />
				<button type="submit" className="btn btn-success mt-2">Submit Order</button>
			</form>	
			{(error !== '') ? (<div className="error bg-warning">{error}</div>) : ''}				
		</div>
	)
}

export default Order;