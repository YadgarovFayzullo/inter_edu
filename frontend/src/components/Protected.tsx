import React, { FC } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
  children: JSX.Element;
}

const Protected: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  if (isAuth === null) {
    return null;
  }

  if (!isAuth) {
  <div className="text-gray-500 text-sm flex justify-center">You should be logged in.</div>
    return null;
  }

  return <>{children}</>;
};

export default Protected;
