import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div
      style={{
        backgroundColor: "#a6f1f7",
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImSpinner9 className="animate-spin size-8" />
    </div>
  );
}

export default Loading;
