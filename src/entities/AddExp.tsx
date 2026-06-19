import { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Position from "./Inputs/Position";
import Describe from "./Inputs/Describe";
import FCShowed from "../features/Showed";
import Switch from "./Switch";
import CVStore from "../store/CV";
import '../shared/styles/Btn.css';

const AddExp = observer(() => {
    const { show, setShow } = FCShowed();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (show) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [show]);

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div>
            {show && (
                <dialog 
                    ref={dialogRef} 
                    onClose={handleClose} 
                    className="flex flex-col py-5"
                >
                    <span>Number: {CVStore.id}</span>
                    <div className="flex flex-col">
                        <Position />
                        <Describe />
                        <Switch />
                    </div>
                    <button onClick={() => setShow(false)} className="mt-4 btn-close">
                        Close
                    </button>
                </dialog>
            )}

            {!show && (
                <div className="flex pt-5 items-center">
                    <button onClick={() => setShow(true)} className="btn-id">
                        Add
                    </button>
                </div>
            )}
        </div>
    );
});

export default AddExp;
