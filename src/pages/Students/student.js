import {
  Button,
  Typography,
  Card,
  Paper,
  CardActions,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StudentCard(props) {
  const { s } = props;
  const nav = useNavigate();

  let target = "";


  return (
    <Card component={Paper} sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight: "bold" }} gutterBottom>
          {s.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>E-mail: {s.email}</Typography>
        <Typography sx={{ mb: 1.5 }}>
          Contect Number: {s.phone}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>Address: {s.address}</Typography>
        <Typography sx={{ mb: 1.5 }}>Parents/Guardian Contect: {s.parents.phoneNO}</Typography>
        <Typography sx={{ mb: 1.5 }}>
          Parents/Guardian E-mail:
          {s.parents.email ? s.parents.email : " --- "}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => nav(`/students/${s.id}`)}
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
}
