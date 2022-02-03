const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={username.props}
        type="text"
        placeholder="username"
        onChange={(event) => {
          props.setUsername(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={email.props}
        type="email"
        placeholder="email"
        onChange={(event) => {
          props.setEmail(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={password.props}
        type="password"
        placeholder="password"
        onChange={(event) => {
          props.setPassword(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        value={verifyPassword.props}
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
