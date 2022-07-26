import { store } from './store';
import { useSyncedStore } from '@syncedstore/react';
export const Answers = () => {
	const state = useSyncedStore(store);
	return (
		<div className="answers">
			<div className="header d-flex justify-content-center">
				<h2>Answers</h2>
			</div>
			<ul>
				// TODO вывод моих ответов
				{state.calculations.map((calc) => {
					const F = new Function(calc);
					return F();
				})}
			</ul>
		</div>
	);
};
