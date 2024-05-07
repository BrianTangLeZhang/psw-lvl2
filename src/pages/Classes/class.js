import {
  Button,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ClassCard({ c }) {
  const nav = useNavigate();

  return (
    <Card component={Paper} sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight: "bold" }} gutterBottom>
          {c.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>Description: {c.description}</Typography>
        <Typography sx={{ mb: 1.5 }}>
          Instructor: {c.instructor ? c.instructor : "-"}
        </Typography>
        <Typography>Students: {c.students.length}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => nav(`/classes/${c.id}`)}
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
}
