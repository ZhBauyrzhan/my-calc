import 'bootstrap/dist/css/bootstrap.min.css';
import { Calculations } from './Calculations';
import { Answers } from './Answers';
import './App.css';

export const App = () => {
	return (
		<div className="App d-flex flex-column">
			<div className="interaction d-flex flex-grow-1 flex-col">
				<Calculations className="calculations p-2 flex-grow-1" />
				<Answers className="answers p-2" />
			</div>
		</div>
	);
};
