import { observer } from "mobx-react-lite"
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';

const ProjName = () =>{
    return(
        <input
        type="text"
        className="mb-3"
        value={CVStore.proj[CVStore.id_proj]?.[0] || ''}
        onChange={(e)=>CVStore.proj[CVStore.id_proj][0] = e.target.value}
        placeholder="Project Name"
        />
    );
}
export default observer(ProjName);