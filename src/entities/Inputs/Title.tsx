import FCTitlte from "../../features/Title";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const Title = () =>{
    const {title, setTitle} = FCTitlte();

    return(
        <input
            type="text"
            placeholder="Name of file"
            value={title}
            onChange={(e)=>setTitle(CVStore.title = e.target.value)}
            maxLength={20}
            required
        />
    )
}
export default observer(Title);