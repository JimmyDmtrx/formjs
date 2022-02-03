const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={props.username}
        type="text"
        placeholder="username"
        onChange={(event) => {
          props.setUsername(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={props.email}
        type="email"
        placeholder="email"
        onChange={(event) => {
          props.setEmail(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={props.password}
        type="password"
        placeholder="password"
        onChange={(event) => {
          props.setPassword(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={props.setVerifyPassword}
        type="password"
        placeholder="verify password"
        onChange={(event) => {
          props.setVerifyPassword(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input type="submit" value={"Valider"} />
    </form>
  );
};
export default Form;
