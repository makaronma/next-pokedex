import TextField from "@mui/material/TextField";

import { useRef, useCallback } from "react";

const NormalSearch = ({ setConditions }) => {
  const filterKeyword = useRef();

  const handleKeywordChange = useCallback(
    (e) => {
      setConditions((prev) => ({
        ...prev,
        keyword: e.target.value,
      }));
    },
    [setConditions]
  );

  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <TextField
        id="standard-basic"
        label="Keyword"
        variant="standard"
        inputRef={filterKeyword}
        onChange={handleKeywordChange}
      />
    </div>
  );
};

export default NormalSearch;
