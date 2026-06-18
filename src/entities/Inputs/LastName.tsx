import FCLastName from "../../features/LastName";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const LastName = () =>{
    const {lastName, setLastName} = FCLastName();

    return (
        <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=>setLastName(CVStore.lastName = e.target.value )}
            maxLength={20}
            required
        />
    );
}
export default observer(LastName);