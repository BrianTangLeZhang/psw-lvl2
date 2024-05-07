import { Container, Typography, Grid, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Card } from "react-bootstrap";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";

export default function Dashboard() {
  const nav = useNavigate();

  const styles = {
    card: {
      padding: 5,
      border: "2px solid black",
      borderRadius: 5,
      borderColor: "midnightblue",
      color: "midnightblue",
      backgroundColor: "white",
    },
  };

  return (
    <>
      <Navbar page="Dashboard" />
      <Container>
        <Grid
          container
          sx={{
            paddingY: 20,
            flex: 1,
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={styles.card}
            onClick={() => nav("/classes")}
          >
            <Card sx={{ alignItems: "center" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <SchoolIcon fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Class Management
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={styles.card}
            onClick={() => nav("/students")}
          >
            <Card sx={{ alignItems: "center" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <AccountCircleIcon fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Student Profiles
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={styles.card}
            onClick={() => nav("/attendance")}
          >
            <Card sx={{ alignItems: "center" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <ChecklistIcon fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Attendance Tracking
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
