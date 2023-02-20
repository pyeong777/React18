import { FaTrashAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEdit = () => {
    const newText = prompt(`새로운 내용을 입력해주세요`);
    onEdit(todo, newText);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleEdit}>
          <FiRefreshCcw />
        </button>
      </span>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
