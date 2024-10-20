import "./PopUpDelete.css";
import removeItFromBackend from "../../functionalities/removeItFromBackend";

interface popupProps {
  onClose: () => void
  id: string,
  onReset: () => void
}

const PopUpDelete: React.FC<popupProps> = ({onClose, id, onReset}) => {
  return (
    <>
      <div className="popupDelete">
        <div className="w-50 h-50 bg-white text-center fs-4 d-flex justify-content-center align-items-center flex-column">
          <p>Tem mesmo certeza, deseja apagar este item? </p> 
          <button className="btn btn-danger w-25" onClick={ async () => {
            await removeItFromBackend(id);
            onClose();

            onReset();
          }}>Apagar</button>
        </div>
      </div>
    </>
  );
}

export default PopUpDelete;
