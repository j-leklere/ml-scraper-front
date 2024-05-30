import { useDispatch } from "react-redux";
import { userActions } from "../store/store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import mainService from "../services/mainService";
import { animationProps } from "../utils/animationProps";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Usuarios hardcode
  // const users = [
  //   { id: 1, username: "Benjamin", password: "benja123" },
  //   { id: 2, username: "Jero", password: "jero123" },
  //   { id: 3, username: "Joa", password: "joa123" },
  // ];

  const formHandler = async (e) => {
    e.preventDefault();

    // Hardcode
    // let usernameAuth = false;
    // let passwordAuth = false;
    // let userIndex;

    // for (let i = 0; i < users.length; i++) {
    //   if (username === users[i].username) {
    //     usernameAuth = true;
    //     if (password === users[i].password) {
    //       passwordAuth = true;
    //       userIndex = i;
    //     }
    //     console.log(users[i]);
    //   }
    // }

    // if (!usernameAuth) {
    //   toast.error("El usuario no existe");
    // }
    // if (usernameAuth && !passwordAuth) {
    //   toast.error("Error de credenciales");
    // }
    // if (usernameAuth && passwordAuth) {
    //   dispatch(userActions.login());
    //   dispatch(userActions.setActualUser(users[userIndex]));
    //   toast.success("Login exitoso!");
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 2000);
    // }

    try {
      const response = await mainService.login(username, password);
      if (response.data.success) {
        const user = {
          id: response.data.user_id,
          username: username,
        };
        localStorage.setItem("userId", user.id);
        localStorage.setItem("loginSuccess", "true");
        dispatch(userActions.login());
        dispatch(userActions.setActualUser(user));
        navigate("/");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("Error de credenciales");
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
      <ToastContainer position="top-right" autoClose={2000} />
    </motion.div>
  );
}
