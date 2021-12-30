import React from "react";

import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () => React.useContext(AuthContext)