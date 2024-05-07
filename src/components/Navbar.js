import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

export default function Navbar(props) {
  const { page } = props;
  const nav = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "midnightblue",
        color: "white",
        padding: 5,
      }}
    >
      <Box>
        <Typography variant="h4">{page.toUpperCase()}</Typography>
      </Box>
      {page !== "Dashboard" && (
        <Box sx={{ display: "flex", gap: 2 }}>
          {page === "Classes" || page === "Students" ? (
            <Button
              color="inherit"
              onClick={() => nav(`/${page.toLowerCase()}/add`)}
            >
              add new
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                nav(
                  `/${
                    page === "AddClass" || page === "Class"
                      ? "classes"
                      : "students"
                  }`
                )
              }
            >
              Back
            </Button>
          )}
          <Button color="inherit" onClick={() => nav("/")}>
            go Dashboard
          </Button>
        </Box>
      )}
    </Box>
  );
}
