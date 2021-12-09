import React, { Component } from "react";
import "./../style/pages/product.css";
export default class Product extends Component {
	render() {
		return (
			<div className="container">
				<div className="form-style-5">
					<form>
						<fieldset>
							<legend>
								<span className="number">1</span>product information
							</legend>
							<input type="text" name="field1" placeholder="Product Name *" />
							<input type="number" name="field2" placeholder="phone number *" />
							<input
								type="number"
								name="field3"
								placeholder="how old is your product"
							/>
							<label htmlFor="waste-type">waste-type</label>
							<select id="waste-type" name="field4">
								<optgroup label="e-waste">
									<option value="laptop">laptop/pc</option>
									<option value="mobile">mobile</option>
									<option value="speaker">speaker</option>
									<option value="other">other</option>
								</optgroup>
								<optgroup label="wooden items">
									<option value="furniture">furniture</option>
									<option value="other">other</option>
								</optgroup>
								<optgroup label="plastic">
									<option value="plastic">plastic</option>
								</optgroup>
								<optgroup label="cookware">
									<option value="cookware">broken cookware</option>
								</optgroup>
								<optgroup label="old clothes">
									<option value="for kids">for kids</option>
									<option value="for adults">for adults</option>
									<option value="other">other</option>
								</optgroup>
							</select>
						</fieldset>
						<fieldset>
							<legend>
								<span className="number">2</span> address
							</legend>
							<textarea name="field3" placeholder="..." defaultValue={""} />
						</fieldset>
						<input type="submit" defaultValue="submit product details" />
					</form>
				</div>
			</div>
		);
	}
}
