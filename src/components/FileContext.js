// FileContext.js
import { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState(null);

  const uploadFile = (content) => {
    setFileContent(content);
  };

  return (
    <FileContext.Provider value={{ fileContent, uploadFile }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  return useContext(FileContext);
};
