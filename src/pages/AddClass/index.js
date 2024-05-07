import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function AddClass() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const nav = useNavigate();

  let students = [];

  let classes = JSON.parse(localStorage.getItem("classes"));
  if (!classes) classes = [];

  let studentsList = JSON.parse(localStorage.getItem("students"));
  if (!studentsList) studentsList = [];

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
    classes = [
      ...classes,
      {
        id: nanoid(),
        name: name,
        description: description,
        students: [...students],
      },
    ];
    localStorage.setItem("classes", JSON.stringify(classes));
    alert("Class added successfully");
    nav("/");
  };

  return (
    <>
      <Navbar page="AddClass" />
      <Container>
        <Box sx={{ textAlign: "center", padding: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            Create New Class
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
          <Typography fontWeight="bold">Students: </Typography>
          <Select fullWidth>
            {studentsList.map((s) => (
              <MenuItem key={s.id} value={s.name}>
                {s.name}
                <Checkbox
                  onChange={(e) => {
                    handlerCheck(e.target.checked, s);
                  }}
                />
              </MenuItem>
            ))}
          </Select>
          <Box sx={{ paddingTop: 3, display: "flex", justifyContent: "end" }}>
            <Button variant="contained" onClick={handlerSubmit}>
              add
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
