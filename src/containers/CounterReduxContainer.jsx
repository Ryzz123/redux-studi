import React, {useState} from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { useSelector , useDispatch} from "react-redux";

// import selector
import { selectUser, selectCounter } from "../features/counter/sliceCounter";

// import actions
import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec
} from "../features/counter/sliceCounter";

const CounterReduxContainer = () => {
  // harus memilih si state punya property bernama user
  const user = useSelector(selectUser);
  // kalau ingin memilih counter
  const counter = useSelector(selectCounter);

  const [currAmount, setCurrentAmount] = useState(0);

  // ambil dispatchernya
  const dispatcher = useDispatch();

  const buttonDecrementOnclickHandler = () => {
    // ingin melakukan suatu aksi dengan nama "decrement"

    // dispatcher( namaActions() )

    // decrement(state) defaultnya sudah ada parameter state
    dispatcher(decrement());
  };

  const buttonIncrementOnclickHandler = () => {
    dispatcher(increment());
  };

  const buttonResetOnclickHandler = () => {
    dispatcher(reset());
  };

  const buttonDecrementByAmountOnClickHanlder = () => {
    // decrementSpec(action) statenya hilang jika paramaternya dua

    dispatcher(decrementSpec(+currAmount));
  };

  const buttonIncrementByAmountOnClickHanlder = () => {
    dispatcher(incrementSpec(+currAmount));
  };

  
  const textFieldAmountOnChangeHandler = (event) => {
    // bisa not a number !
    setCurrentAmount(event.target.value);
  };

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

        <Box sx={{ display: "flex", gap: 2}}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box display={"flex"} gap="2">
        <Button
          variant="outlined"
          color="success"
          onClick={buttonDecrementOnclickHandler}
          >
            -1
          </Button>

          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnclickHandler}
          >
            0
          </Button>

          <Button
          variant="outlined"
          color="success"
          onClick={buttonIncrementOnclickHandler}
          >
            +1
          </Button>
        </Box>

        <Box display={'flex'} gap="2">
          <TextField 
          label="amount" 
          size="small" 
          value={currAmount} 
          onChange={textFieldAmountOnChangeHandler} />

          <Button
          variant="outlined"
          color="success"
          onClick={buttonDecrementByAmountOnClickHanlder}
          >
            - Amount
          </Button>

          <Button 
          variant="outlined"
          color="success"
          onClick={buttonIncrementByAmountOnClickHanlder}
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterReduxContainer;
