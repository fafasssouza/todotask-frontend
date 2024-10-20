import { useState } from "react";
import InputTodoTask  from "./components/InputTodoTask";
import TaskRenderer from "./components/TaskRenderer";

function App() {
  const [refresh, setRefresh] = useState(false);
  const startRefresh = () => {
    setRefresh(!refresh);
  } 

  return (
    <>
     <div className="container-fluid w-100 mb-5 pb-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-3">
            <h2 className="text-center">
              To-Do List.
            </h2>
            <TaskRenderer refresh={refresh} onReset={startRefresh} />
            <InputTodoTask _onClick={startRefresh}  />
          </div>
          <div className="col-3"></div>
        </div> 
     </div> 
    </>
  );
}

export default App;
