import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StudentCard from "./student";
import { useEffect } from "react";

export default function Students() {
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) students = [];
  const nav = useNavigate();

  return (
    <>
      <Navbar page="Classes" />
      <Container style={{ flex: 1, justifyContent: "center" }}>
        {students.length < 1 ? (
          <>
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              <Typography variant="h3">No student added yet</Typography>
              <Button variant="contained" onClick={() => nav("/students/add")}>
                Add Student
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ paddingY: 5, textAlign: "center" }}>
              <Typography variant="h4">Students</Typography>
            </Box>
            <Box sx={{ flex: 1, flexDirection: "column" }}>
              {students.map((s) => (
                <StudentCard key={s.id} s={s} />
              ))}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
