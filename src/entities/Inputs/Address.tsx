import FCAddress from "../../features/Address";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const Address = () =>{
    const {address, setAddress} = FCAddress();

    return(
        <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(CVStore.address = e.target.value)}
            maxLength={40}
            required
        />
    );
}
export default observer(Address);