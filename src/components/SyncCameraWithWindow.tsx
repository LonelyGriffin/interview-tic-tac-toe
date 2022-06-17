import { newRect } from "../utils/rect";
import { setCamera } from "../store/reducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newVector } from "../utils/vector";

export const SyncCameraWithWindow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCamera(
        newRect(
          newVector(0, 0),
          newVector(window.innerWidth, window.innerHeight)
        )
      )
    );
  }, [dispatch]);

  return null;
};
