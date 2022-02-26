import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LoadMoreBtn = ({ setPage }) => {
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant="outlined" onClick={handleLoadMore}>
        More
      </Button>
    </Box>
  );
};

export default LoadMoreBtn;
