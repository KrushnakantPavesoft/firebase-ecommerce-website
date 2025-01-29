import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, use, useState } from "react";
import { auth } from "../../firebase/firebase";

const GlobalPagesContext = createContext({
  name: "Krushna",
  handleLoginSubmit: () => {},
  error: null,
  setError: () => {},
  handleSignupSubmit: () => {},
  signUpError: null,
  cartItem: [],
});

export const GlobalPagesProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);

  //Login function
  const handleLoginSubmit = async (values) => {
    console.log(values);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  //Signup function
  const handleSignupSubmit = async (values) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert("Signup successful!");
    } catch (err) {
      setSignUpError(err.message);
    }
  };

  return (
    <>
      <GlobalPagesContext.Provider
        value={{
          name: "Krushna",
          handleLoginSubmit,
          error,
          setError,
          handleSignupSubmit,
          signUpError,
        }}>
        {children}
      </GlobalPagesContext.Provider>
      ;
    </>
  );
};

export const useGlobalPagesContext = () => use(GlobalPagesContext);
