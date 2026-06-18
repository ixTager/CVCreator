import { observer } from "mobx-react-lite";
import CVStore from "../store/CV";
import '../shared/styles/Btn.css';

const Switch_proj = observer(() => {
    return (
        <div className="flex justify-between">
            <button
                onClick={() => CVStore.prevProjID()}
                className="btn-id" 
            >
                Previous
            </button>

            <button
                onClick={() => CVStore.nextProjId()}
                className="btn-id" 
            >
                Next
            </button>
        </div>
    );
});

export default Switch_proj;