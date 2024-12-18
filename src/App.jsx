import { useRef } from "react";
import "./App.css";
import MyInput from "./MyInput";

function App() {
  const inputRef = useRef(null);
  return (
    <>
      <MyInput ref={inputRef} />
    </>
  );
}

export default App;
