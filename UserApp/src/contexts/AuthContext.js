import {createContext, useContext, useEffect, useState} from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../graphql/queries';
import {createUser} from '../graphql/mutations';
const AuthContext = createContext({});
const AuthContextProvider = ({children}) => {
  //   const [authUser, setAuthUser] = useState(null);
  //   const [dbUser, setDbUser] = useState(null);
  useEffect(() => {
    const syncUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      const userData = await API.graphql(
        graphqlOperation(getUser, {id: authUser.attributes.sub}),
      );
      if (userData.data.getUser) {
        console.log('User already exists in database');
        return;
      }
      const newUser = {
        id: authUser.attributes.sub,
        email: authUser.attributes.email,
        name: authUser.attributes.name,
        phone_number: authUser.attributes.phone_number,
        ratings: 5,
      };
      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, {input: newUser}),
      );
    };
  }, []);
  //   const sub = authUser?.attributes?.sub;
  return (
    <AuthContext.Provider value={{authUser, dbUser, sub}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
