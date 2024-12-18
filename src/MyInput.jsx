const MyInput = (props) => {
  const { ref } = props;
  const focus = () => {
    console.log("focus");
  };

  const selectAll = () => {
    console.log("selectAll");
  };
  return (
    <>
      <div className="w-full flex flex-col p-48 gap-5 bg-black rounded-xl justify-around">
        <h1 className="flex items-start">Forwarding Refs</h1>
        <div className="flex flex-col gap-2">
          <input ref={ref} className="h-10" />
          <div className="flex w-full justify-center gap-2">
            <button onClick={focus}>Focus</button>
            <button onClick={selectAll}>Select All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInput;
