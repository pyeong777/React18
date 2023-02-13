import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const input = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert("텍스트를 입력해주세요");
      input.current.focus();
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
    input.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
