import { observer } from "mobx-react-lite";
import CVStore from "../store/CV";
import '../shared/styles/Btn.css';

const Switch = observer(() => {
    return (
        <div className="flex justify-between">
            <button
                onClick={() => CVStore.prevID()}
                className="btn-id" 
            >
                Previous
            </button>

            <button
                onClick={() => CVStore.nextId()}
                className="btn-id" 
            >
                Next
            </button>
        </div>
    );
});

export default Switch;