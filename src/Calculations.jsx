import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { useSyncedStore } from '@syncedstore/react';
import { store, webrtcProvider } from './store';
import { MenuBar } from './MenuBar';
export const Calculations = () => {
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
	const names = [
		// TODO добавить имена
		'White Zebra',
		'Orange Tiger',
		'Yellow Lion',
		'Fast Cat',
		'Stooped Dog',
	];

	const getRandomElement = (list) =>
		list[Math.floor(Math.random() * list.length)];
	const getRandomColor = () => getRandomElement(colors);
	const getRandomName = () => getRandomElement(names);

	const state = useSyncedStore(store);
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: 'Write something …', //TODO написать инструкцию
			}),
			Collaboration.configure({
				fragment: state.fragment,
			}),
			CollaborationCursor.configure({
				provider: webrtcProvider,
				user: { name: getRandomName(), color: getRandomColor() },
			}),
		],
		content: 'Here I am',
		onUpdate: ({ editor }) => {
			const json = editor.getJSON();
			console.log(json); // TODO писать ответы при изменении 
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
