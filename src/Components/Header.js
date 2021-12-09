import React, { Component } from "react";
import logo from "./../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import Icon from "./../util/Icon";
import Cookie from "universal-cookie";
import { toast } from "react-toastify";
// import axios from "./../util/Axios";

const cookies = new Cookie();

export default class Header extends Component {
	state = {
		navbar: false,
		isLoggedin: false,
	};

	componentDidMount() {
		if (cookies.get("ecosmart")) {
			this.setState({ isLoggedin: true });
		}
	}

	showToast = (msg) => toast(msg);

	render() {
		return (
			<>
				<header className="header">
					<div
						className="header__btn"
						onClick={() => {
							this.setState({
								navbar: !this.state.navbar,
							});
						}}
					>
						<Icon icon="menu-1" />
					</div>
					<div className="header__left">
						<div className="header__logo">
							<img src={logo} alt="Waste eco smart" />
						</div>

						<div className="header__link">
							<Link to="/">Home</Link>
							<Link to="/">About</Link>
							<Link to="/">Contact</Link>
						</div>
					</div>
					<div className="header__user">
						{this.state.isLoggedin ? (
							<>
								<Link to="/me">
									<h5>user</h5>
								</Link>
								<Icon icon="user" />
								<button
									onClick={() => toast.success("Signing you out")}
									to="/signout"
									className="auth__btn"
								>
									Sign out
								</button>
							</>
						) : (
							<>
								<Link to="/signup" className="auth__btn">
									Signup
								</Link>
								<Link to="/signup" className="auth__btn">
									login
								</Link>
							</>
						)}
					</div>
				</header>
				<div className={`mobile__nav ${this.state.navbar ? "active" : ""}`}>
					<Link to="/">Home</Link>
					<Link to="/">About</Link>
					<Link to="/">Contact</Link>
					<Link to="/signup">Signup</Link>
				</div>
			</>
		);
	}
}
