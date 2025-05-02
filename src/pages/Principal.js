import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Container, Typography, Box, Button } from "@mui/material";

const Principal = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        }
      } else {
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo, {usuario.nome}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Nome completo:</strong> {usuario.nome} {usuario.sobrenome}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {usuario.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Data de Nascimento:</strong> {usuario.dataNascimento}
        </Typography>
        <Button onClick={handleLogout} variant="contained" color="secondary" sx={{ mt: 2 }}>
          Sair
        </Button>
      </Box>
    </Container>
  );
};

export default Principal;
