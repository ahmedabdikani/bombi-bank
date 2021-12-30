import { useContext } from "react";

import {DrawerContext} from "../context/DrawerContext";

const useDrawerContext = () => useContext(DrawerContext)

export {
  useDrawerContext
}