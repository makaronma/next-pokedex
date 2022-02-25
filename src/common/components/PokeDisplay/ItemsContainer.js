import Box from "@mui/material/Box";
const ItemsContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ItemsContainer;
