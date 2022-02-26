import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ mt: 5, mb: 20 }}>{children}</Box>
      <Footer />
    </>
  );
};

export default index;
