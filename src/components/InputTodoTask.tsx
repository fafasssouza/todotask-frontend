import { useState } from "react";
import  sendToBackend  from "../functionalities/sendToBackend";

interface inputProps {
  _onClick: () => void,
}

const InputTodoTask: React.FC<inputProps> = ({ _onClick}) => {
  const [inputVal, setInputVal] = useState(""); 
  const prevent = (event: React.FormEvent<HTMLFormElement>) => event.preventDefault(); 

  return (
    <>
      <div className="container-fluid w-100 h-25 border-top p-4 bg-white 
      position-fixed top-100 start-50 translate-middle">
        <div className="row">
          <div className="col-10">
            <form onSubmit={prevent}>
              <input type="text" value={inputVal} maxLength={255} placeholder="Escreva sua tarefa..." className="w-100 form-control p-2" onChange={e => setInputVal(e.target.value)}></input>
            </form> 
          </div>
          <div className="col-2"> 
            <button className="btn btn-primary w-100 p-2" onClick={ async () => {
              const inputValueForRequest = inputVal;
              setInputVal("");
              let response = null; 
              response = await sendToBackend(inputValueForRequest);
              if(response === 201) {
                _onClick();
              }
            }}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}
export default InputTodoTask;
