// PascalCassing
function Message() {
  //JSX JavaScript XML
  const name = "Carlos";
  if (name) {
    return <h1>Hello {name}!</h1>;
  }
  return <h1>Hello guest!</h1>;
}

export default Message;
