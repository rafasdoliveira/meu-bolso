// import { UserData } from "@modules/login/services/login.dto";

type UserContextType = {
  user: {
    value: string;
    set: React.Dispatch<string>;
  };
  perfil: {
    value: string[];
    set: React.Dispatch<string[]>;
  };
  // userData: {
  // 	value: UserData;
  // 	set: React.Dispatch<UserData>;
  // };
};

export type { UserContextType };
