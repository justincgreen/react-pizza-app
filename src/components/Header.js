import { Link } from 'react-router-dom';
import pizzaLogo from '../images/pizza-logo.png';

const Header = ({authorized}) => {
	// Mobile click event for navicon
	const handleClick= () => {
		const navicon = document.querySelector('.navicon');	
		const links = document.querySelector('.links');	
		const topBar = document.querySelector('.top-bar');
		const middleBar = document.querySelector('.middle-bar');
		const bottomBar = document.querySelector('.bottom-bar');
			
		if(links.classList.contains('active')) {
			navicon.classList.remove('active');
			links.classList.remove('active');
			topBar.classList.remove('active');
			middleBar.classList.remove('active');
			bottomBar.classList.remove('active');
		}else {
			navicon.classList.add('active');
			links.classList.add('active');
			topBar.classList.add('active');
			middleBar.classList.add('active');
			bottomBar.classList.add('active');
		}
	}
	
	// Close mobile menu when an anchor tag is clicked
	const handleMobileLinks = (e) => {
		const navicon = document.querySelector('.navicon');
		const links = document.querySelector('.links');
		const topBar = document.querySelector('.top-bar');
		const middleBar = document.querySelector('.middle-bar');
		const bottomBar = document.querySelector('.bottom-bar');	
		
		if(e.target.tagName === 'A' && links.classList.contains('active')) {
			navicon.classList.remove('active');
			links.classList.remove('active');
			topBar.classList.remove('active');
			middleBar.classList.remove('active');
			bottomBar.classList.remove('active');

		}
	}
	return (
		<nav className="nav">
			<div className="container relative">
				{authorized && <span className="admin-tab">Hello, Admin!</span>}
				<div className="row">
					<div className="col-md-6">
						<Link to="/">
							<h1 className="logo">
								<img src={pizzaLogo} alt="Pizza logo" className="img-fluid" />
								<span>OKC Pizza</span>
							</h1>
						</Link>
					</div>
					<div className="col-md-6">						
						<div className="links" onClick={handleMobileLinks}>
							{!authorized && <Link to="/login">Login</Link>}
							{authorized && <Link to="/orderlist">Order List</Link>}
							<Link to="/order">Order</Link>
						</div>
					</div>
				</div>
				
				<div className="navicon d-md-none" onClick={handleClick}>
					<span className="bar top-bar"></span>
					<span className="bar middle-bar"></span>
					<span className="bar bottom-bar"></span>
				</div>
			</div>
		</nav>
	)
}

export default Header;