import { useState } from "react";

const InputCreate = () => {
  const [title, setTitle] = useState("");

  const urlApi = "http://localhost:3000/created";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const payload = { title };

    try {
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Tarea creada:", data);

      setTitle("");
    } catch (error) {
      console.error("Error creando tarea:", error);
    }
  };

  return (
    <div>
      <h2>Crear nueva tarea</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InputCreate;