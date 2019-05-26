import React, { Component } from "react";

class Popular extends Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedLanguage: "All"
		};
	}

	updateLanguage (selectedLanguage) {
		this.setState({
			selectedLanguage
		});
		console.log(this.state.selectedLanguage);
	}

	render () {
		const languages = [ "All", "Javascript", "Java", "CSS", "Python", "Ruby" ];
		return (
			<ul className="flex-center">
				{languages.map(lang => (
					<li key={lang}>
						<button
							className="btn-clear nav-link"
							style={lang === this.state.selectedLanguage ? { color: "red" } : { color: "black" }}
							onClick={() => this.updateLanguage(lang)}
						>
							{lang}
						</button>
					</li>
				))}
			</ul>
		);
	}
}

export default Popular;
