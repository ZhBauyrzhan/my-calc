export const MenuBar = ({ editor }) => {
	if (!editor) {
		return null;
	}
	return (
		//TODO  Изменить стиль
		<button
			onClick={() => editor.chain().focus().toggleOrderedList().run()}
			className={editor.isActive('orderedList') ? 'is-active' : ''}
		>
			<h4>Ordered list</h4>
		</button>
	);
};
