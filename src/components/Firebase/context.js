import React from 'react';


//creates two components. FirebaseContext.Provider compontent is used to provide a Firebase instance once at the top-level of React comp tree. FirebaseContext.Consumer is used to retrieve the Firebase instance if it's needed in the React component
const FirebaseContext = React.createContext(null) 

export default FirebaseContext;

