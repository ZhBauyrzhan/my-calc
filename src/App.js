import 'bootstrap/dist/css/bootstrap.min.css';
import { Calculations } from './Calculations';
import { Answers } from './Answers';
import './App.css';
// import { useState } from 'react';
import { connect, disconnect /*, store*/ } from './store';
// import { useSyncedStore } from '@syncedstore/react';

export const App = () => {
	// const [f, setF] = useState(false);
	// const state = useSyncedStore(store);
	return (
		<div className="App d-flex flex-column">
			<div className="connection p-2 d-flex justify-content-around">
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault1"
						onChange={connect}
					/>
					<label className="form-check-label" for="flexRadioDefault1">
						<h3>Online (enable sync)</h3>
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault1"
						onChange={disconnect}
					/>
					<label className="form-check-label" for="flexRadioDefault1">
						<h3>Online (enable sync)</h3>
					</label>
				</div>
			</div>
			<div className="interaction d-flex flex-grow-1 flex-col">
				<Calculations className="calculations p-2 flex-grow-1" />
				<Answers className="answers p-2" />
			</div>
		</div>
	);
};
