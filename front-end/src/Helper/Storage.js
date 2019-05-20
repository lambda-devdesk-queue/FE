// Function to get state from localStorage and state of the react application.

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err);
    }
  };
  
  // Function to save the application state to localStorage and stringify it to the key state.
  
  export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (err) {
      console.log(err);
    }
  };