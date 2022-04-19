import React, { createContext, useState, useContext} from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {

//your variables
//example
const [userId, setUserId] = useState<any>("");


    return (
        <UserContext.Provider
            value={{
                userId 
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    
    if (!context) throw new Error("useUser must be used within a CountProvider");

    const { person } = context;

    return { person };
}