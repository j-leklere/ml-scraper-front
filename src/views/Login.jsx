import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";
import { animationProps } from "../utils/animationProps";

export default function Login() {
  return (
    <motion.div className="login" {...animationProps}>
      <LoginForm />
    </motion.div>
  );
}
