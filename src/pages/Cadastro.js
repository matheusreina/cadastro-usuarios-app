import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
        uid: user.uid,
      });

      navigate("/principal");
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cadastro
        </Typography>
        {erro && <Typography color="error">{erro}</Typography>}
        <form onSubmit={handleCadastro}>
          <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Senha" type="password" fullWidth margin="normal" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <TextField label="Nome" fullWidth margin="normal" value={nome} onChange={(e) => setNome(e.target.value)} required />
          <TextField label="Sobrenome" fullWidth margin="normal" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
          <TextField
            label="Data de Nascimento"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Cadastrar
          </Button>
        </form>
        <Button onClick={() => navigate("/login")} variant="text" fullWidth sx={{ mt: 2 }}>
          Já tem conta? Faça login
        </Button>
      </Box>
    </Container>
  );
};

export default Cadastro;
