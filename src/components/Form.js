import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
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
						/>
					</div>
					<div className="formitem">
						<label htmlFor="lastname">Last name</label>
						<input
							type="text"
							name="lastname"
							classname="lastname"
							placeholder="Last name"
						/>
					</div>
					<div className="formitem">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							classname="email"
							placeholder="Email"
						/>
					</div>
					<div classname="messagearea formitem">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							cols="30"
							rows="5"
							placeholder="Enter your message"
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
