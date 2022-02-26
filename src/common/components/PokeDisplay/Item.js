import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Item = ({ id, name, img }) => {
  const lazyRoot = useRef(null);
  return (
    <Grid item xs={6} md={3}>
      <Link href={`/pokes/${id}`} passHref>
        <CardActionArea>
          <CardMedia
            style={{ display: "flex", justifyContent: "center", padding: 10 }}
          >
            <Image
              lazyRoot={lazyRoot}
              loader={() => img}
              src={`${name}-front-default.png`}
              alt={name}
              width="130"
              height="130"
              objectFit="contain"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Grid>
  );
};

export default Item;
