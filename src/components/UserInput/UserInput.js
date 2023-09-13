import React from "react";

const UserInput = ((props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    //...
    console.log("SUBMIT");
  };

  const resetHandler = () => {
    //...
    console.log("RESET");
  };

  const changeHandler = (input, value) => {
    console.log(input, value);
  };
  
  return (
		<form onSubmit={submitHandler} className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="number"
						id="current-savings"
						onChange={(event) => {
							changeHandler("current-savings", event.target.value);
						}}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						onChange={(event) => {
							changeHandler("yearly-contribution", event.target.value);
						}}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						type="number"
						id="expected-return"
						onChange={(event) => {
							changeHandler("expected-return", event.target.value);
						}}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						id="duration"
						onChange={(event) => {
							changeHandler("duration", event.target.value);
						}}
					/>
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt" onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
});

export default UserInput;
