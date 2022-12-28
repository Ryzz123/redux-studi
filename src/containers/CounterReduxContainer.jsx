import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { useSelector } from "react-redux";

const CounterReduxContainer = () => {
  // harus memilih si state punya property bernama user
  const user = useSelector((state) => state.user);
  // kalau ingin memilih counter
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          Redux
        </Typography>

        <Typography variant="body1" component="div">
          Nama Orang: {user}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>
      </Box>
    </>
  );
};

export default CounterReduxContainer;
