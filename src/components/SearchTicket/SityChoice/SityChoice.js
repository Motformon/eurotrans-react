import React, {Component} from 'react';

class SityChoice extends Component {

	state = {
		listShowCity: false,
		listShowCityHover: false,
	}

	onFocusListShowHandler = () => {
		this.setState({
			listShowCity: true,
		})
	}
	onBlurListHideHandler = () => {
			this.setState({
				listShowCity: false,
			})
	}

	 onClickChoiceSityHandler = (event) => {
	
		this.props.onClickChoiceSityHandler(event);
		
		this.setState({
			listShowCity: false,
			listShowCityHover: false, 
		});
	}

	onMouseEnterListHandler = () => {
		this.setState({
			listShowCityHover: true,
		});
	}

	onMouseLeaveListHandler = () => {
		this.setState({
			listShowCityHover: false,
		});
	}
render() {



const destinationList = this.props.destination.map((elem, index) => 
<li 
	key={ index.toString() } 
	className="booking-form__option booking-form__option_cities text text_regular"
	onClick = {this.onClickChoiceSityHandler}
>
	{elem.name}
</li>
); 

// console.log(destinationList)

	return (
		<React.Fragment>
			<label className="booking-form__label text text_regular" htmlFor={this.props.labelHtmlFor}>{this.props.labelText}</label>
			<input 
				className="booking-form__input booking-form__input_select" 
				id={this.props.inputIdName} 
				autocomplete="off" 
				name={this.props.inputIdName} 
				placeholder={this.props.inputPlaceholder} 
				required
				value = {this.props.valueInput}
				onFocus={this.onFocusListShowHandler}
				onBlur={this.onBlurListHideHandler}
				onChange={this.props.onChangeSearchHandler}
			/>

			{  
				this.state.listShowCityHover || this.state.listShowCity  
				? 	<ul 
							className="booking-form__cities-list"
							onMouseEnter={this.onMouseEnterListHandler}
							onMouseLeave={this.onMouseLeaveListHandler}
						>
							{ destinationList }
						</ul>
				: null 
			}
		</React.Fragment>


	)}
};

export default SityChoice;


