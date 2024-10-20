import { useEffect, useState} from "react";
import { getFromBackend } from "../functionalities/getFromBackend";
import Task from "./Task";

interface taskProps {
  refresh: boolean;
  onReset: () => void 
}

const TaskRenderer: React.FC<taskProps> = ({ refresh, onReset }) => {  
  const [listTask, setListTask] = useState<JSX.Element[]>([]);
 
  useEffect(() => {

    const getData = async () => {
      await getFromBackend().then(e => {

        for(const item of e) {
          const task = 
            <li key={item.Id} className="list-group-item"> 
              <Task task={item.Action} check={item.Check} id={item.Id} onReset={onReset}/>            
            </li>;

          setListTask(lt => [...lt, task]);
        }

         
      });  
    }

    getData();

    return () => {
      setListTask([]);
    };
  }, [refresh, onReset]);

  return (<ul className="list-group">
          {listTask}
          </ul>);
}
 
export default TaskRenderer;
