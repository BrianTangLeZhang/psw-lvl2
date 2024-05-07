import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ClassCard from "../Classes/class";
import { ButtonGroup } from "react-bootstrap";

export default function ClassDetails() {
  const [start_date, setStartDate] = useState("1999-01-01");
  const [end_date, setEndDate] = useState("");
  const { id } = useParams();
  let classes = JSON.parse(localStorage.getItem("classes"));
  if (!classes) classes = [];
  const c = classes.find((c) => c.id === id);
  let students = JSON.parse(localStorage.getItem("students"));
  if (students) students = students.filter((s) => s.class === id);
  let attendanceList = JSON.parse(localStorage.getItem("attendance"));
  if (!attendanceList) attendanceList = [];

  const nav = useNavigate();

  useEffect(() => {
    let currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();
    setEndDate(`${year}-${month}-${day}`);
  }, []);

  const deletehandler = () => {
    classes = classes.filter((c) => c.id === id);
  };

  return (
    <>
      {c ? (
        <>
          <Navbar page="Class" />
          <Container sx={{ paddingY: 10, textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 8 }} fontWeight="bold">
              {c.name}
            </Typography>
            <ClassCard c={c} type="class" />
            <ButtonGroup>
              <Button
                onClick={() => nav(`/classes/update/${c.id}`)}
                variant="contained"
                color="info"
              >
                Edit
              </Button>
              <Button onClick={deletehandler} variant="contained" color="error">
                Delete
              </Button>
            </ButtonGroup>
            <Typography variant="h4" sx={{ my: 5 }} fontWeight="bold">
              Attendance Record
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <TextField
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  sx={{ minWidth: "400px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="p">Date Range</Typography>
                <Typography variant="h6">--------------------------</Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  sx={{ minWidth: "400px" }}
                />
              </Grid>
            </Grid>
            {attendanceList.length > 0 ? (
              <>
                {attendanceList
                  .filter((r) => r.class === id)
                  .filter((r) => r.date >= start_date && r.date <= end_date)
                  .map((r) => (
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        {r.date}
                      </Typography>

                      <Divider />
                    </Box>
                  ))}
              </>
            ) : (
              <></>
            )}
          </Container>
        </>
      ) : (
        <>
          <Navbar />
          <Container sx={{ paddingY: 20, textAlign: "center" }}>
            <Typography variant="h4">Class not found</Typography>
            <Typography variant="body1" component={Link} to="/classes">
              Back
            </Typography>
          </Container>
        </>
      )}
    </>
  );
}
