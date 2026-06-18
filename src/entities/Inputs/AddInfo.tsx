import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import FCAddInfo from "../../features/AddInfo";

const AddInfo = () =>{

    const {addInfo, setAddInfo} = FCAddInfo();

    return(
        <input
        type="text"
        value={addInfo}
        onChange={(e)=>setAddInfo(CVStore.inform = e.target.value)}
        placeholder="Addition information"
        maxLength={150}/>
    );
}
export default observer(AddInfo);
