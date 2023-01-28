import React, { useState } from "react";

const FormContext = React.createContext({
  isEditing: false,
  startEditing: () => {},
  stopEditing: () => {},
});

export const FormContextProvider = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <FormContext.Provider
      value={{
        isEditing: isEditing,
        startEditing: startEditingHandler,
        stopEditing: stopEditingHandler,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
