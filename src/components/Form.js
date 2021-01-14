import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

export default class Form extends Component {
	state = {
		firstname: "",
		lastname: "",
		email: "",
		message: "",
		sent: false,
	};

	handleFirstname = e => {
		this.setState({
			firstname: e.target.value,
		});
	};

	handleLastname = e => {
		this.setState({
			lastname: e.target.value,
		});
	};

	handleEmail = e => {
		this.setState({
			email: e.target.value,
		});
	};

	handleMessage = e => {
		this.setState({
			message: e.target.value,
		});
	};

	submitMessage = e => {
		e.preventDefault();
		let data = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			message: this.state.message,
		};
		axios
			.post("/api/forma", data)
			.then(res => {
				this.setState(
					{
						sent: true,
					},
					this.resetForm()
				);
			})
			.catch(() => {
				console.log("Failed to send message");
			});
	};

	resetForm = () => {
		this.setState({
			firstname: "",
			lastname: "",
			email: "",
			message: "",
		});
		setTimeout(() => {
			this.setState({
				sent: false,
			});
		}, 5000);
	};

	render() {
		return (
			<div className="formcontainer">
				<form>
					<div className="formitem">
						<label htmlFor="firstname">First name</label>
						<input
							type="text"
							name="firstname"
							classname="firstname"
							placeholder="First name"
							value={this.state.firstname}
							onChange={this.handleFirstname}
						/>
					</div>
					<div className="formitem">
						<label htmlFor="lastname">Last name</label>
						<input
							type="text"
							name="lastname"
							classname="lastname"
							placeholder="Last name"
							value={this.state.lastname}
							onChange={this.handleLastname}
						/>
					</div>
					<div className="formitem">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							classname="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleEmail}
						/>
					</div>
					<div classname="messagearea formitem">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							cols="30"
							rows="5"
							placeholder="Enter your message"
							value={this.state.message}
							onchance={this.handleMessage}
						></textarea>
					</div>
					<div className="messagesent">Message has been sent..</div>
					<div className="formbutton">
						<button type="submit">Send</button>
					</div>
				</form>
			</div>
		);
	}
}
