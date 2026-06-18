import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';
import FCBirth from "../../features/Birth";

const Birth = () =>{
    const {birth, setBirth} = FCBirth();

    return(
        <input
        type="text"
        value={birth}
        onChange={(e)=>setBirth(CVStore.birth = e.target.value)}
        placeholder="Birth"
        maxLength={10}
        required/>
    );
}
export default observer(Birth);