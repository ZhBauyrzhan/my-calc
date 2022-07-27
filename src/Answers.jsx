export const Answers = ({ state }) => {
	// console.log('ANS');
	return (
		<div className="answers">
			<div className="header d-flex justify-content-center">
				<h2>Answers</h2>
			</div>
			{
				// TODO вывод моих ответов
			}
			<ul>
				{state.calculations.map((calculation, i) => {
					try {
						let ans = eval(calculation);

						return (
							<li className="ans-li" key={i}>
								{ans}
							</li>
						);
					} catch (err) {
						return (
							<li className="ans-li" key={i}>
								Not function
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};
