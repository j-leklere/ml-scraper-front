import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export default function Login() {
  return (
    <motion.div className="login" {...animationProps}>
      <LoginForm />
    </motion.div>
  );
}
