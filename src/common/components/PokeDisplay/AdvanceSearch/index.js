import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const AdvanceSearch = ({ types }) => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      Advance Search:
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
          gap: 2,
          width: "50%",
        }}
      >
        {types.map((type) => (
          <Card sx={{ textAlign: "center" }} key={`criteria-type-${type}`}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {type}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      Ability
      Area
    </Box>
  );
};

export default AdvanceSearch;
