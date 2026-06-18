import FCFirstName from "../../features/FirstName";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const FirstName = () =>{
    const {firstName, setFirstName} = FCFirstName();

    return(
        <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=>setFirstName(CVStore.firstName = e.target.value)}
            maxLength={20}
            required
        />
    );
}
export default observer(FirstName);