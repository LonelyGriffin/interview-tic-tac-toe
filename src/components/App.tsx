import "./styles.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SyncCameraWithWindow } from "./SyncCameraWithWindow";
import { Cells } from "./Cells";

export default function App() {
  return (
    <Provider store={store}>
      <SyncCameraWithWindow />
      <Cells />
    </Provider>
  );
}
