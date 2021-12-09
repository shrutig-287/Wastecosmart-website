import React, { Component } from "react";
import icon from "./../assets/images/icon.svg";
export default class Icon extends Component {
	render() {
		let html = `
    <use xlink:href="${icon}#${this.props.icon}"></use>
  `;
		return (
			<svg className="icon" dangerouslySetInnerHTML={{ __html: html }}></svg>
		);
	}
}
