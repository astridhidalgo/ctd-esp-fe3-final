import { useState } from "react";
import "../Components/styles/form.css";
import Modal from "./Modal";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensajeOk, setMensajeOk] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim()) {
      setError("Por favor ingrese su nombre");
      setVisible(true);
      return;
    }

    if (nombre.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      setVisible(true);
      return;
    }

    if (!email.trim()) {
      setError("Por favor ingrese su correo electrónico");
      setVisible(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor ingrese un correo electrónico válido");
      setVisible(true);
      return;
    }

    setMensajeOk(
      `Gracias ${nombre}, te contactaremos lo antes posible vía email`
    );

    console.log("Datos del formulario:", { nombre, email });

    setNombre("");
    setEmail("");
    setError("");
    setVisible(true);
  };

  return (
    <div className="form-container">
      {error && (
        <Modal show={visible} onClose={() => setVisible(false)}>
          <p style={{ color: "red" }}>{error}</p>
        </Modal>
      )}

      {mensajeOk && (
        <Modal show={visible} onClose={() => setVisible(false)}>
          <p style={{ color: "green" }}>{mensajeOk}</p>
        </Modal>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Full Name:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button className="buttonForm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
