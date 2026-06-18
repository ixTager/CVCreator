import CVStore from "../store/CV";
import ProjDescribe from "./Inputs/ProjDescribe";
import ProjName from "./Inputs/ProjName";
import { observer } from "mobx-react-lite";
import Switch_proj from "./Switch_proj";
import '../shared/styles/Btn.css';

const AddProj = () =>{
    
    return(
        <div>
            {CVStore.showed?
            (
                <div className="flex flex-col py-5">
                    <span>Number: {CVStore.id_proj}</span>
                    <div className="flex flex-col">
                        <ProjName />
                        <ProjDescribe />
                        <Switch_proj />
                    </div>
                </div>
            )
            :
            (
                <div className="flex pt-5 items-center">
                    <button
                    onClick={()=>CVStore.setShowedProj()}
                    className="btn-id">Add proj</button>
                </div>
            )
            }
        </div>
    );
}
export default observer(AddProj);