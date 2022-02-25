import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Item = ({ id, name, img }) => {
  return (
    <Card sx={{ minWidth: 270, maxWidth: "23%", width: "100%", m: 1 }}>
      <Link href={`/pokes/${id}`} passHref>
        <CardActionArea>
          <CardMedia
            style={{ display: "flex", justifyContent: "center", padding: 10 }}
          >
            <Image
              loader={() => img}
              src={`${name}-front-default.png`}
              alt={name}
              width="130"
              height="130"
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
