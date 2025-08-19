import "./styles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className="App">
      {!showModal && <button onClick={modalHandler}>Show Modal</button>}

      {showModal && <Modal onClose={modalHandler} />}
    </div>
  );
}
