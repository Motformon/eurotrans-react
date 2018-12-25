import React, {Component} from 'react';

class Passangers extends Component {

	state = {
		passangersShow: false,
		passangersShowHover: false,
	}

	onFocusListShowHandler = () => {
		this.setState({
			passangersShow: true,
		})
	}
	onBlurListHideHandler = () => {
		this.setState({
			passangersShow: false,
		})
	}


	onMouseEnterListHandler = () => {
		this.setState({
			passangersShowHover: true,
		});
	}
	onMouseLeaveListHandler = () => {
		this.setState({
			passangersShowHover: false,
		});
	}


render() {

	const PASSENGERS = [`пассажир`, `пассажира`, `пассажиров`];

  const NUM_ENDING = {
    multipleHundred: 100,
    multipleTen: 10,
    greaterThenEleven: 11,
    lessThenNineteen: 19
  };

  const getNumEnding = (iNumber, aEndings) => {
    let sEnding;
    let i;
    iNumber = iNumber % NUM_ENDING.multipleHundred;
    if (
      iNumber >= NUM_ENDING.greaterThenEleven &&
      iNumber <= NUM_ENDING.lessThenNineteen
    ) {
      sEnding = aEndings[2];
    } else {
      i = iNumber % NUM_ENDING.multipleTen; 
      switch (i) {
        case 1:
          sEnding = aEndings[0];
          break;
        case 2:
        case 3:
        case 4:
          sEnding = aEndings[1];
          break;
        default:
          sEnding = aEndings[2];
      }
    }
    return sEnding;
  };

	const allPassangers = this.props.passengerAdult + this.props.passengerChild;

	const resultPassangersString = `${allPassangers} ${getNumEnding(allPassangers,PASSENGERS)}`;

	return (
		<div className="booking-form__container" id="passengerHeader">
			<label className="booking-form__label text text_regular" htmlFor="passengers">Пассажиры</label>
			<input
			 className="booking-form__input booking-form__input_passengers text text_regular" 
			 type="text" 
			 id="passengers"  
			 onFocus={this.onFocusListShowHandler}
			 onBlur={this.onBlurListHideHandler}
			 readOnly
			 value={resultPassangersString}
			 
			/>
			
			{ 
				this.state.passangersShowHover || this.state.passangersShow 
				? <ul 
						className="booking-form__cities-list booking-form__cities-list_passenger"
						onMouseEnter={this.onMouseEnterListHandler}
						onMouseLeave={this.onMouseLeaveListHandler}
					>
						<li className="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
								<p className="booking-form__passenger text text_regular">Взрослые
									<span className="booking-form__container-passenger">
										<button 
											className="booking-form__count-passenger booking-form__count-passenger_minus"
											onClick={this.props.onClickMinusAdultHandler}
										>
											<span className="visually-hidden">Минус</span>
										</button>
										<input className="booking-form__counter text text_regular"  id="adult" name="adult" required autoComplete="off" value={this.props.passengerAdult}/>
										<button
											className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"
											onClick={this.props.onClickPlusAdultHandler}
										>
											<span className="visually-hidden">Плюс</span>
										</button>
									</span>
								</p>
						</li>
						<li className="booking-form__option booking-form__option_passengers booking-form__option_passenger">
								<p className="booking-form__passenger text text_regular">Дети
									<span className="booking-form__container-passenger">
										<button 
											className="booking-form__count-passenger booking-form__count-passenger_minus"
											onClick={this.props.onClickMinusChildHandler}
										>
											<span className="visually-hidden">Минус</span>
										</button>
										<input className="booking-form__counter text text_regular"  name="children" required autoComplete="off" value={this.props.passengerChild}/>
										<button
											className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"
											onClick={this.props.onClickPlusChildHandler}
										>
											<span className="visually-hidden">Плюс</span>
										</button>
									</span>
								</p>
						</li>
				</ul>
				: null 
			}
			

	</div>
	)}
};

export default Passangers;


