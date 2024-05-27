import { useDispatch } from "react-redux";
import { userActions } from "../store/store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //USUARIOS
  const users = [
    { id: 1, username: "Benjamin", password: "benja123" },
    { id: 2, username: "Jero", password: "jero123" },
    { id: 3, username: "Joa", password: "joa123" },
  ];

  const formHandler = (e) => {
    e.preventDefault();
    let usernameAuth = false;
    let passwordAuth = false;
    let userIndex;

    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username) {
        usernameAuth = true;
        if (password === users[i].password) {
          passwordAuth = true;
          userIndex = i;
        }
        console.log(users[i]);
      }
    }

    if (!usernameAuth) {
      toast.error("El usuario no existe");
    }
    if (usernameAuth && !passwordAuth) {
      toast.error("Error de credenciales");
    }
    if (usernameAuth && passwordAuth) {
      dispatch(userActions.login());
      dispatch(userActions.setActualUser(users[userIndex]));
      toast.success("Login exitoso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <motion.div className="login-box" {...animationProps}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={formHandler}>
        <label htmlFor="">Usuario</label>
        <input
          htmlFor=""
          onKeyUp={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="">Contraseña</label>
        <input
          htmlFor=""
          type="password"
          onKeyUp={(e) => setPassword(e.target.value)}
        ></input>
        <button>Iniciar Sesión</button>
      </form>
      <ToastContainer position="top-right" autoClose={1000} />
    </motion.div>
  );
}
