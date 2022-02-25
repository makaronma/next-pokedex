import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Item = ({ id, name, img }) => {
  return (
    <Card sx={{ minWidth: 216, maxWidth: "25%", width: "100%" }}>
      <Link href={`/pokes/${id}`} passHref>
        <CardActionArea>
          <CardMedia
            style={{ display: "flex", justifyContent: "center", padding: 10 }}
          >
            <Image
              loader={() => img}
              src={`${name}-front-default.png`}
              alt={name}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default Item;
