import { Provider } from "react-redux";
import { store } from "../store/store";
import { SyncCameraWithWindow } from "./SyncCameraWithWindow";
import { Cells } from "./Cells";
import { StatusText } from "./StatusText";

export default function App() {
  return (
    <Provider store={store}>
      <SyncCameraWithWindow />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1> Infinity tic-tac-toe</h1>
        <div
          style={{
            width: "550px",
            height: "550px",
            overflow: "hidden",
            border: "10px solid black",
          }}
        >
          <Cells />
        </div>
        <StatusText />
      </div>
    </Provider>
  );
}
