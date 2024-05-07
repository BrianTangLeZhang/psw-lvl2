import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import { nanoid } from "nanoid";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [icNumber, setIcNumber] = useState("");
  const [birthDate, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [parents, setParents] = useState({});

  const nav = useNavigate();

  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) students = [];

  const handlerSubmit = () => {
    students = [
      ...students,
      {
        id: nanoid(),
        name: name,
        email: email,
        ic_number: icNumber,
        date_of_birth: birthDate,
        address: address,
        phone: phoneNumber,
        parents: { ...parents },
      },
    ];
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student added successfully");
    nav("/students");
  };

  return (
    <>
      <Navbar page="AddStudent" />
      <Container>
        <Box sx={{ textAlign: "center", padding: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            Student Infomation
          </Typography>
        </Box>
        <Box
          sx={{ border: "1px solid gray", borderRadius: "20px", px: 5, py: 2 }}
        >
          <Typography fontWeight="bold">Name: </Typography>
          <TextField
            fullWidth
            required
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Typography fontWeight="bold">E-mail: </Typography>
          <TextField
            fullWidth
            required
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography fontWeight="bold">IC Number: </Typography>
          <TextField
            fullWidth
            required
            placeholder="012345-01-0123"
            value={icNumber}
            onChange={(e) => setIcNumber(e.target.value)}
          />
          <Typography fontWeight="bold">Contact Number: </Typography>
          <TextField
            fullWidth
            required
            placeholder="(+60)1234567890"
            onChange={(e) =>
              setPhoneNumber(
                e.target.value.includes("+60")
                  ? e.target.value
                  : "+60" + e.target.value
              )
            }
          />
          <Typography fontWeight="bold">Date of Birth: </Typography>
          <TextField
            fullWidth
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <Typography fontWeight="bold">Address: </Typography>
          <TextField
            fullWidth
            required
            type="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ my: 1 }}
            textAlign="center"
          >
            Parents or Guardian Contect Infomation:
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <Typography fontWeight="bold">
            Parents/Guardian Contact Number:
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="(+60)1234567890"
            onChange={(e) =>
              setParents({
                ...parents,
                phoneNO: e.target.value.includes("+60")
                  ? e.target.value
                  : "+60" + e.target.value,
              })
            }
          />
          <Typography fontWeight="bold">Parents/Guardian E-mail: </Typography>
          <TextField
            fullWidth
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => setParents({ ...parents, email: e.target.value })}
          />
          <Box sx={{ paddingTop: 2, display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "midnightblue", color: "white" }}
              onClick={handlerSubmit}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
