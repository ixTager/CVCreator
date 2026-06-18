import { observer } from "mobx-react-lite";
import Position from "./Inputs/Position";
import Describe from "./Inputs/Describe";
import FCShowed from "../features/Showed";
import Switch from "./Switch";
import CVStore from "../store/CV";
import '../shared/styles/Btn.css';

const AddExp = observer(() => {
    const { show, setShow } = FCShowed();
    return (
        <div>
            {show ? (
                <div className="flex flex-col py-5">
                    <span>Number: {CVStore.id}</span>
                    <div className="flex flex-col">
                        <Position />
                        <Describe />
                        <Switch />
                    </div>
                </div>
            ) : (
                <div className="flex pt-5 items-center">
                    <button
                    onClick={() => setShow(true)}
                    className="btn-id">Add</button>
                </div>
            )}
        </div>
    );
});


export default AddExp;