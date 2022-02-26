import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const NormalSearch = ({ filterKeyword, handleFilterPoke }) => {
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <TextField
        id="standard-basic"
        label="Keyword"
        variant="standard"
        inputRef={filterKeyword}
      />
      <IconButton aria-label="search" onClick={handleFilterPoke}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default NormalSearch;
