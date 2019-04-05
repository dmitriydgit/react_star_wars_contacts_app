import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import { ReactComponent } from '*.svg';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var CONTACTS = [
	{
		id: 1,
		name: 'Chuwbucca',
		phoneNumber: '+493222233',
		image: "https://cdn-images-1.medium.com/max/1600/0*NlXMlQoGDnTs8i8A.jpg",
		age: "25",
		sex: "male",
		isHuman: false
	},
	{
		id: 2,
		name: 'Dart Veider',
		phoneNumber: '+493222234',
		image: "https://cdn-images-1.medium.com/max/1600/0*dcNIPOKRsdncMiQC.jpg",
		age: "40",
		sex: "male",
		isHuman: true

	},
	{
		id: 3,
		name: 'Master Joda',
		phoneNumber: '+493222235',
		image: "https://cdn-images-1.medium.com/max/1600/0*7ytq0_9fumbCGpap.jpg",
		age: "250",
		sex: "male",
		isHuman: false

	},
	{
		id: 4,
		name: 'Luck Skywalker',
		phoneNumber: '+493222236',
		image: "https://cdn-images-1.medium.com/max/1600/0*nTMFcumK6Gu4lLxv.jpg",
		age: "25",
		sex: "male",
		isHuman: true

	},
	{
		id: 5,
		name: 'R2D2',
		phoneNumber: '+493222237',
		image: "https://cdn-images-1.medium.com/max/1600/0*GULI3NCeLVWQWdS7.jpg",
		age: "15",
		sex: "undefined",
		isHuman: false

	},
	{
		id: 6,
		name: 'Princess LEA',
		phoneNumber: '+493222238',
		image: "https://cdn-images-1.medium.com/max/1600/0*-EbUwNpPutpc5N2U.jpg",
		age: "25",
		sex: "female",
		isHuman: true

	}
]

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpened: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			isOpened: !this.state.isOpened
		})
		console.log(this.state.isOpened)
	}

	showShortInfo() {
		return (
			<li className="contact" onClick={this.handleClick} >
				<img className="contact-image" src={this.props.image} alt={this.props.name} />
				<div className="contacts-info">
					<div className="contact-name">{this.props.name}</div>
					<div className="contact-phoneNumber">{this.props.phoneNumber}</div>
				</div>
			</li >
		)
	}

	showFullInfo() {
		return (
			<li className="contact" onClick={this.handleClick} >
				<img className="contact-image" src={this.props.image} alt={this.props.name} />
				<div className="contacts-info">
					<div className="contact-name">{this.props.name}</div>
					<div className="contact-phoneNumber">{this.props.phoneNumber}</div>
					<div className="contact-phoneNumber">Age: {this.props.age}</div>
					<div className="contact-phoneNumber">Sex: {this.props.sex}</div>
					<div className="contact-phoneNumber">Human: {this.props.isHuman.toString()}</div>
				</div>
			</li >
		)
	}


	render() {
		return (
			this.state.isOpened ? this.showFullInfo() : this.showShortInfo()
		)
	}
}



class ContactsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayedContacts: CONTACTS
		}
		this.handleSearch = this.handleSearch.bind(this);
	}


	handleSearch(event) {
		var searchQuerry = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function (el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuerry) !== -1;
		})
		this.setState({ displayedContacts: displayedContacts });
	}

	render() {
		return (
			<div className='contacts'>
				<input type='text' className="search-field" onChange={this.handleSearch} />
				<ul className='contacts-list'>
					{this.state.displayedContacts.map(function (el) {
						return (
							<Contact
								name={el.name}
								key={el.id}
								phoneNumber={el.phoneNumber}
								image={el.image}
								age={el.age}
								sex={el.sex}
								isHuman={el.isHuman}
							/>
						)
					})}
				</ul>
			</div>
		)
	}
}


ReactDOM.render(
	<ContactsList />,
	document.getElementById('root')
);

