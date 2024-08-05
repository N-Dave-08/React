export default function Tasks({ name, onDelete }) {
  return (
    <li>
      {name} <button onClick={onDelete}>x</button>
    </li>
  );
}
