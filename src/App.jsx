import { useRef, useState } from "react";
import "./App.css";
import MyInput from "./MyInput";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  return (
    <>
      <MyInput ref={inputRef} value={value} setValue={setValue} />
    </>
  );
}

export default App;
