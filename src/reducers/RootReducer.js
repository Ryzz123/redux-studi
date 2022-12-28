// 1 - user (nama dari user itu siapa - string)
// 2 - counter (angkanya ada berapa - number)

export const initialValue = {
  user: "Ryzz",
  counter: 100000,
};

export const rootReducer = (state, action) => {
  // TypeAksi namanya harus "type"
  // sehinggga action wajib punya property namanya "type"

  // "increment" untuk menambahkan counter (+1)
  // "decrement" untuk mengurangi counter (-1)
  // "incrementSpec" untuk menambahkan counter sejumlah "amount" (+ amount)
  // "decrementSpec" untuk mengurangi counter sejumlah "amount" (- amount)
  // "reset" untuk membuat counter jadi 0

  if (action.type === "increment") {
    // sebelumnya return counter + 1; <--- angka yang baru
    // state itu harus IMMUTABLE (tidak boleh di reassign)

    // mengembalikan suatu object yang baru !
    return {
      ...state, // ini isinya seluruh state yang lama punya property
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "incrementSpec") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  } else if (action.type === "decrementSpec") {
    return {
      ...state,
      counter: state.counter - action.amount,
    };
  } else if (action.type === "reset") {
    return {
      ...state,
      counter: 0,
    };
  }

  // harus punya suatu default action
  else {
    return state;
  }
};
