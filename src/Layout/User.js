import React, { Component } from "react";
import Header from "./../Components/Header";
import user from "./../assets/images/user.svg";
export default class User extends Component {
	render() {
		return (
			<div>
				<Header />
				<h3 className="primary__header">Welcome User</h3>
				<div className="container user__container">
					<div className="user__container__profile">
						<img
							className="user__container__profile-icon"
							alt="user"
							src={user}
						/>
						<h4 className="name">user name</h4>
						<h4 className="email">client@gmail.com</h4>
					</div>
					<div className="user__container__coin">
						<h4>
							Coins <span>40</span>
						</h4>
					</div>
				</div>
			</div>
		);
	}
}
