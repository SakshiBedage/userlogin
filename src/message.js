import { useSelector } from "react-redux";

const Message = () => {
  const isUserValid = useSelector((state) => state.isUserValid);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p style={{ color: isUserValid ? "green" : "red" }}>
        {isUserValid
          ? "You have successfully logged in!!!!!"
          : "Oops ...Something went wrong!!!!!"}
      </p>
    </div>
  );
};

export default Message;
