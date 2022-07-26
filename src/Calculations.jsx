/**
 * Тут есть Editor tiptap и Menu
 * В menu можете включить или выключить нумерацию строк
 * туда пишем свои вычесления
 */

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { webrtcProvider } from './store';
import { MenuBar } from './MenuBar';
import { SyncedText } from '@syncedstore/core';

export const Calculations = ({ state }) => {
	//Каждому юзеру выдают рандомный цвет из массива
	const colors = [
		//TODO добавить цвета
		'#958DF1',
		'#F98181',
		'#FBBC88',
		'#FAF594',
		'#70CFF8',
		'#94FADB',
		'#B9F18D',
	];
	//Каждому юзеру даю прикольное имя
	const names = [
		// TODO добавить имена
		'White Zebra',
		'Orange Tiger',
		'Yellow Lion',
		'Fast Cat',
		'Stooped Dog',
	];

	//Функции выдачи
	const getRandomElement = (list) =>
		list[Math.floor(Math.random() * list.length)];
	const getRandomColor = () => getRandomElement(colors);
	const getRandomName = () => getRandomElement(names);
	// Создаю tiptap editor
	let col = 1;
	const editor = useEditor({
		extensions: [
			StarterKit, // Обычные дополнения текста
			Placeholder.configure({
				placeholder: 'Write something …',
			}),
			Collaboration.configure({
				fragment: state.fragment,
			}),
			// Настройка курсора
			CollaborationCursor.configure({
				provider: webrtcProvider,
				user: { name: getRandomName(), color: getRandomColor() },
			}),
		],
		content: 'Here I am', //TODO написать инструкцию,
		onUpdate: ({ editor }) => {
			state.calculations.push(col);
			// console.log(col++);
			// state.calculations.map((calculation) => {
			// 	console.log(calculation);
			// });
			const json = editor.getJSON();
			const changedCalculations = [];
			// console.log('state', state.calculations);
			console.log(state.calculations[0]);
			for (let i = 0; i < json.content.length; i++) {
				if (
					json.content.length > 1 &&
					json.content[i] !== null &&
					json.content[i] !== undefined &&
					json.content[i].content !== null &&
					json.content[i].content !== undefined &&
					json.content[i].content[0] !== null &&
					json.content[i].content[0] !== undefined &&
					json.content[i].content[0] !== null
				) {
					state.calculations.push(
						new SyncedText(json.content[i].content[0].text)
					);
					changedCalculations.push(
						new SyncedText(json.content[i].content[0].text)
					);
				}
				// changedCalculations.push(json.content[i].content[0].text);
			}
			// console.log(changedCalculations);
			// state.calculations = changedCalculations;
			// console.log(json.content[1]); // TODO писать ответы при изменении
			/**
			 * Код ниже я писал для того чтобы понять как устроен json
			 * Почему ничего не работало
			 * И как не ловить ошибки
			 */
			// if (
			// 	json.content.length > 1 &&
			// 	json.content[1] !== null &&
			// 	json.content[1] !== undefined &&
			// 	json.content[1].content !== null &&
			// 	json.content[1].content !== undefined &&
			// 	json.content[1].content[0] !== null &&
			// 	json.content[1].content[0] !== undefined &&
			// 	json.content[1].content[0] !== null
			// )
			// 	console.log(json.content[1].content[0].text);
		},
	});
	return (
		<div className="calculations flex-grow-1">
			<div className="header d-flex justify-content-center">
				<h2>Calculations</h2>
			</div>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};
