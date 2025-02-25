import { useContext } from 'react';
import { UserContext } from './userContext';

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};

export { useUserContext };
