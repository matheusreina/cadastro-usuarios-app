import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#238636",
  color: "white",
  fontWeight: "bold",
  padding: "8px 16px",
  borderRadius: "6px",
  textTransform: "none",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#2ea043",
    boxShadow: "0 0 0 3px rgba(46, 160, 67, 0.3)",
  },
  "& .MuiSvgIcon-root": {
    marginRight: "8px",
  },
}));

export default function GitHubRepoButton({ repoUrl }) {
  return (
    <GitHubButton variant="contained" startIcon={<GitHubIcon />} href={repoUrl} target="_blank" rel="noopener noreferrer">
      Ver repositório
    </GitHubButton>
  );
}
