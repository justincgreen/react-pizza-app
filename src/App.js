import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './components/Order';
import OrderList from './components/OrderList';
import OrderSummary from './components/OrderSummary';
import LoginForm from './components/LoginForm';

function App() {
   // Get orders from local storage
   const getLocalData = () => {
   const data = localStorage.getItem('orderlist');
     
     if(data) {
       return JSON.parse(data);
     }else {
       return []
     }
   }
   
   // Main array of objects || orders state || orders array of objects
   const [orders, setOrders] = useState(getLocalData);
   
   // Order summary state - this state is temporary, gets reset every new order
   const [orderSummary, setOrderSummary] = useState({});
   
   // input field states
   const [name, setName] = useState('');
   const [pizzaSize, setPizzaSize] = useState('Medium');
   const [pizzaSizePrice, setPizzaSizePrice] = useState(0);
   const [pizza, setPizza] = useState('Veggie');
   const [pizzaTypePrice, setPizzaTypePrice] = useState(2);
   const [crust, setCrust] = useState('Thick Crust');
   const [crustPrice, setCrustPrice] = useState(0);
   const [mushrooms, setMushrooms] = useState('');
   const [mushroomsPrice, setMushroomsPrice] = useState(0);
   const [olives, setOlives] = useState('');
   const [olivesPrice, setOlivesPrice] = useState(0);
   const [baseTotal, setBaseTotal] = useState(10);
   
   // login authorization to view order list
   const getAuthData = () => {
     const data = localStorage.getItem('authorization');
     
     if(data) {
       return JSON.parse(data);
     }else {
       return false;
     }
   }
   const [authorized, setAuthorized] = useState(getAuthData);
  
  return (
    <Router>
    <div className="App">
      <Header authorized={authorized} />
      
      <div className="app-content">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/order">
              <Order 
              orders={orders} setOrders={setOrders} orderSummary={orderSummary} setOrderSummary={setOrderSummary} name={name} setName={setName} 
              pizzaSize={pizzaSize} setPizzaSize={setPizzaSize} pizzaSizePrice={pizzaSizePrice} setPizzaSizePrice={setPizzaSizePrice} 
              pizza={pizza} setPizza={setPizza} pizzaTypePrice={pizzaTypePrice} setPizzaTypePrice={setPizzaTypePrice}
              crust={crust} setCrust={setCrust} crustPrice={crustPrice} setCrustPrice={setCrustPrice} 
              mushrooms={mushrooms} setMushrooms={setMushrooms} mushroomsPrice={mushroomsPrice} setMushroomsPrice={setMushroomsPrice} 
              olives={olives} setOlives={setOlives} olivesPrice={olivesPrice} setOlivesPrice={setOlivesPrice} 
              baseTotal={baseTotal} setBaseTotal={setBaseTotal}
               />
            </Route>         
            <Route path="/orderlist">
              <OrderList orders={orders} setOrders={setOrders} authorized={authorized} setAuthorized={setAuthorized}/>
            </Route>
            <Route path="/ordersummary">
              <OrderSummary orderSummary={orderSummary} />
            </Route>
            <Route path="/login">
              <LoginForm authorized={authorized} setAuthorized={setAuthorized} getAuthData={getAuthData} />
            </Route> 
          </Switch>
        </div>
      </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
