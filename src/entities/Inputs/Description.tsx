import FCDescription from "../../features/Description";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const Description = () =>{
    const {description, setDescription} = FCDescription();

    return(
            <input
            type="text"
            placeholder="Desctiption"
            value={description}
            onChange={(e)=>setDescription(CVStore.description = e.target.value)}
            maxLength={200}
            required
            />
    );
}
export default observer(Description);