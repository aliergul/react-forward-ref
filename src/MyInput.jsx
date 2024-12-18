/* eslint-disable react/prop-types */
import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  const { value, setValue } = props;
  const focus = () => {
    if (ref && ref.current) {
      ref.current.setSelectionRange(value.length, value.length);
      ref.current.focus();
    }
  };

  const selectAll = () => {
    if (ref && ref.current) {
      ref.current.select();
    }
  };
  return (
    <>
      <div className="w-full flex flex-col p-48 gap-5 bg-black rounded-xl justify-around">
        <h1 className="flex items-start">Forwarding Refs</h1>
        <div className="flex flex-col gap-2">
          <input
            ref={ref}
            className="h-10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex w-full justify-center gap-2">
            <button onClick={focus}>Focus</button>
            <button onClick={selectAll}>Select All</button>
          </div>
        </div>
      </div>
    </>
  );
});

MyInput.displayName = "MyInput";

export default MyInput;
