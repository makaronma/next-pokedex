import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBtn = ({onClick}) => {
  return (
    <IconButton aria-label="search" onClick={onClick}>
      <SearchIcon />
    </IconButton>
  );
};

export default SearchBtn;
