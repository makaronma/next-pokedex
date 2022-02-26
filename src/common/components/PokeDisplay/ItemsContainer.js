import Grid from "@mui/material/Grid";
const ItemsContainer = ({ children }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {children}
    </Grid>
  );
};

export default ItemsContainer;
