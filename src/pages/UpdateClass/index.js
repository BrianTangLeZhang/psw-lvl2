import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import { nanoid } from "nanoid";

export default function UpdateClass() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  const { id } = useParams();

  let classes = JSON.parse(localStorage.getItem("classes"));
  if (!classes) classes = [];
  const c = classes.find((c) => c.id === id);
  const idx = classes.findIndex((c) => c.id === id);
  let studentsList = JSON.parse(localStorage.getItem("students"));
  if (!studentsList) studentsList = [];
  const nav = useNavigate();

  let students = [];

  useEffect(() => {
    setName(c.name);
    setDescription(c.description);
    setInstructor(c.instructor);
  }, []);

  const handlerCheck = (checked, s) => {
    if (checked) {
      students = [...students, s];
      console.log(students);
    } else {
      students = students.filter((x) => x.id !== s.id);
      console.log(students);
    }
  };

  const handlerSubmit = () => {
    classes[idx] = {
      ...classes,
      name: name,
      description: description,
      students: [...students],
    };
    localStorage.setItem("classes", JSON.stringify(classes));
    alert("Class updated successfully");
    nav("/");
  };

  return (
    <>
      <Navbar page="AddClass" />
      <Container>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box sx={{ textAlign: "center", padding: 5 }}>
            <Typography variant="h4" fontWeight="bold">
              Update Class
            </Typography>
          </Box>
          <Box
            sx={{ border: "1px solid gray", borderRadius: "20px", padding: 5 }}
          >
            <Typography fontWeight="bold">Class Name: </Typography>
            <TextField
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography fontWeight="bold">Description: </Typography>
            <TextField
              fullWidth
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Typography fontWeight="bold">Instructor: </Typography>
            <TextField
              fullWidth
              required
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
            />
            <Typography fontWeight="bold">Students: </Typography>
            <Select fullWidth>
              {studentsList
                .filter((s) => s.class === c.id)
                .map((s) => (
                  <>
                    <MenuItem key={s.id} value={s.name}>
                      {s.name}
                      <Checkbox
                        onChange={(e) => {
                          handlerCheck(e.target.checked, s);
                        }}
                      />
                    </MenuItem>
                  </>
                ))}
            </Select>
            <Box sx={{ paddingTop: 3, display: "flex", justifyContent: "end" }}>
              <Button variant="contained" onClick={handlerSubmit}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
