import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ClassTable from "./class";

export default function Classes() {
  let classes = JSON.parse(localStorage.getItem("classes"));
  if (!classes) classes = [];

  const nav = useNavigate();

  return (
    <>
      <Navbar page="Classes" />
      <Container style={{ flex: 1, justifyContent: "center" }}>
        {classes.length === 0 ? (
          <>
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              <Typography variant="h3">No class added yet</Typography>
              <Button variant="contained" onClick={() => nav("/classes/add")}>
                Add Class
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ paddingY: 5, textAlign: "center" }}>
              <Typography variant="h3">All Classes</Typography>
            </Box>
            <Box sx={{ flex: 1, flexDirection: "column" }}>
              {classes.map((c) => (
                <ClassTable key={c.id} c={c} />
              ))}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
