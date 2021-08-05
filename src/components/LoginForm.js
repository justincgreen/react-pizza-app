import {useState} from 'react';
import {useHistory, Redirect} from 'react-router-dom';

const LoginForm = ({authorized, setAuthorized}) => {
	const adminUser = {
		username: 'admin',
		password: 'admin'
	}
	
	const [error, setError] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');	
	const history = useHistory();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(username === adminUser.username && password === adminUser.password) {			
			setUsername('');
			setPassword('');
			setAuthorized(true);
			localStorage.setItem('authorization', 'true');
			history.push('/orderlist');
		}else {
			setError('🚫 User info did not match');
			// Clear error message after 2 seconds
			setTimeout(() => { 
			  setError('');
			}, 2000);
		}
	}
	
	const usernameToggle = (e) => {
		setUsername(e.target.value);
	}	
	
	const passwordToggle = (e) => {
		setPassword(e.target.value);
	}
	
	const hint = () => {
		setUsername('admin');
		setPassword('admin');
	}
	
	
	// If already logged in and authorized, redirect to order list component
	if(authorized) {
		return <Redirect to="/orderlist" />
	}	
	  
	return (
		<div>
			<form className="login-form" onSubmit={handleSubmit}>
				<h2>Login to view orders</h2>				
				<div className="form-group">
					<label htmlFor="email">Username:</label>
					<input type="text" className="form-control"  placeholder="Enter username" value={username} onChange={usernameToggle}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>	
					<input type="password" className="form-control" placeholder="Enter password" value={password} onChange={passwordToggle} />
				</div>
				
				<input type="submit" value="Login" className="btn btn-success" />
				<span className="hint" onClick={hint}>Need a hint?</span>
				{(error !== '') ? (<div className="error bg-warning">{error}</div>) : ''}
			</form>
		</div>
	)
}

export default LoginForm;