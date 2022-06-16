import { useSelector } from "react-redux";
import { newRect, Rect } from "../utils/rect";
import { RootState, setCamera } from "../store/reducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newVector, Vector } from "../utils/vector";

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
