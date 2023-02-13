export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((item, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
