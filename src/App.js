import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { auth, db } from "./firebaseConfig";
import { useEffect } from "react";
import GitHubRepoButton from "./components/GitHubButton";

function App() {
  useEffect(() => {
    console.log("Firebase auth:", auth);
    console.log("Firestore db:", db);
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <GitHubRepoButton repoUrl="https://github.com/matheusreina/cadastro-usuarios-app" />
      </div>
    </div>
  );
}

export default App;
