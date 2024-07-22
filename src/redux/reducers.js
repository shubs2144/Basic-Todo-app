const initialState = {
    tasks: []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task, index) => index !== action.payload)
        };
      case 'EDIT_TASK':
        const updatedTasks = state.tasks.map((task, index) => {
          if (index === action.payload.index) {
            return action.payload.newTask;
          }
          return task;
        });
        return {
          ...state,
          tasks: updatedTasks
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  