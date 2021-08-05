import {useEffect} from 'react';
import {useHistory, Redirect} from 'react-router-dom';

const OrderList = ({orders, setOrders, authorized, setAuthorized}) => {
	// Delete Order
   const deleteOrder = (id) => {
	 const filterOrders = orders.filter((element, index) => {
	   return element.id !== id;
	 });
	 setOrders(filterOrders);
   }
   
   useEffect(() => {
	   // save(update) data in local storage
	   localStorage.setItem('orderlist', JSON.stringify(orders));
   },[orders]);
   
   const history = useHistory();
   
   const logout = () => {
	   setAuthorized(false);
	   localStorage.setItem('authorization', 'false');
	   history.push('/');	   
   }
	
	// If not logged in and authorized, redirect to login component
	if(!authorized) {
		return <Redirect to="/login" />
	}
	return (
		<div>
			<h1>Customer Orders</h1>
			{orders.length < 1 && <div className="mb-3">There are currently no customer orders</div>}
			{orders.map(order => (
			<div key={order.id} className="order">
				<strong>Name:</strong> {order.name} <br/>
				<strong>Pizza:</strong> {order.pizzaSize} {order.pizza.toLowerCase()} {order.crust.toLowerCase()} {order.mushrooms.toLowerCase()} {order.olives.toLowerCase()} <br />
				<strong>Total:</strong> ${order.total}
				<button className="btn btn-success" onClick={() => deleteOrder(order.id)}>Complete Order</button>
			</div>
			))}
			<button className="btn btn-warning" onClick={logout}>Logout</button>
			{orders.length > 1 && <div className="remove-all-orders"><button className="btn btn-danger" onClick={() => setOrders([])}>Remove All Orders</button></div>}
		</div>
	)
}

export default OrderList;