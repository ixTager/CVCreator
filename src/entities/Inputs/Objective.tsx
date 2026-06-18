import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';
import FCObjective from "../../features/Objective";

const Objective = () =>{
    const {objective, setObjective} = FCObjective();

    return(
        <input
        type="text"
        value={objective}
        onChange={(e)=>setObjective(CVStore.objective = e.target.value)}
        placeholder="Objective"
        maxLength={400}
        required/>
    );
}
export default observer(Objective);