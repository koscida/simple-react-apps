// src/App.js
import React, { useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './cat.scss'

class CatParadise extends React.Component {
	state = {
		data: [],
		countries: [],
		filter: [],
	};

	componentDidMount() {
		this.fetchCountryData();
	}

	fetchCountryData = async () => {
		const url = "https://api.thecatapi.com/v1/breeds";

		try {
			console.log("try: " + url);
			const response = await axios.get(url);
			const data = await response.data;

			// create the default filter, an array of all the country codes
			const filter = data.reduce((countries, cat) => {
				const code = cat.country_code;
				if (!countries.includes(code)) countries.push(code);
				return countries;
			}, []);

			// create a list of the countries
			var countries = Object.values(
				data.reduce((countries, cat) => {
					const origin = cat.origin;
					if (origin in countries) countries[origin].push(cat);
					else countries[origin] = [cat];
					return countries;
				}, {})
			)
				.sort((a, b) => a.length - b.length)
				.map((country) => ({
					name: country[0].origin,
					code: country[0].country_code,
					breeds: country.length,
					filter: [country[0].country_code],
				}));
			// add the "All" case
			countries.push({
				name: "All",
				code: "all",
				breeds: data.length,
				filter,
			});

			this.setState({
				data,
				countries,
				filter,
			});
		} catch (error) {
			console.log(error);
		}
	};

	avgWeightImperial = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.weight.imperial.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(2)
			: "";

	avgWeightMetric = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.weight.metric.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(1)
			: "";

	avgLifeSpan = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.life_span.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(2)
			: "";

	handleClick = (e) => {
		const filter = this.state.countries.find(
			(country) => e.target.value === country.code
		).filter;
		this.setState({
			filter,
		});
	};

	displayCatFilter = () => {
		return <div>
			{this.state.countries.map((country) => {
				const classes =
					"btn m-1 " +
					(country.filter === this.state.filter
						? "btn-danger"
						: "btn-outline-danger");
				return (
					<button
						key={country.name}
						type="button"
						className={classes}
						onClick={this.handleClick}
						value={country.code}
					>
						{country.name} ({country.breeds})
					</button>
				);
			})}
		</div>;
	};

	displayCats = () => (
		<>
			{this.state.data.length > 0
				? this.state.data
						.filter((cat) => this.state.filter.includes(cat.country_code))
						.map((cat) => {
							const catImage = cat.image ? (
								<img src={cat.image.url} alt={cat.name} />
							) : (
								<img src="./images/no_cat.png" alt="stylized cat" />
							);
							return (
								<div className="col-lg-3 col-md-4 col-sm-6" key={cat.id}>
									<div className="card cat mb-2">
										<div className="card-img-top">{catImage}</div>
										<div className="card-body">
											<h5 className="card-title">{cat.name}</h5>
											<p>
												<b>{cat.origin}</b>
											</p>
											<p>
												<span className="text-muted">Temperament: </span>
												{cat.temperament}
											</p>
											<p>
												<span className="text-muted">Life Span: </span>
												{cat.life_span}
											</p>
											<p>
												<span className="text-muted">Weight: </span>
												{cat.weight.metric} kg ({cat.weight.imperial} lb)
											</p>
											<p>
												<span className="text-muted">Description</span>
											</p>
											<p>{cat.description}</p>
										</div>
									</div>
								</div>
							);
						})
				: "Loading cats..."}
		</>
	);

	render() {
		return (
			<div id="CatParadiseApp">
				<div className="container-fluid">
					<section className="py-lg-5 py-2 text-center">
						<div className="row py-lg-5 py-2">
							<div className="col-lg-6 col-md-8 mx-auto">
								<h1 className="fw-light py-lg-3">Cats Paradise</h1>
								<div className="lead text-muted">
									<p>There are {this.state.data.length} cat breeds</p>
									<p>
										On average a cat can weight about {this.avgWeightMetric()} Kg (
										{this.avgWeightImperial()} lb) and lives {this.avgLifeSpan()} years.
									</p>
								</div>
								{this.displayCatFilter()}
							</div>
						</div>
					</section>
					<div className="row">
						{this.displayCats()}
					</div>
					
				</div>
			</div>
		);
	}
}

export default CatParadise;
