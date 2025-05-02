import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (error) {
      setErro("Usuário não cadastrado ou credenciais inválidas");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {erro && <Typography color="error">{erro}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Senha" type="password" fullWidth margin="normal" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </form>
        <Button onClick={() => navigate("/")} variant="text" fullWidth sx={{ mt: 2 }}>
          Não tem conta? Cadastre-se
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
