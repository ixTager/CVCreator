import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import CVStore from "../store/CV";
import ProjDescribe from "./Inputs/ProjDescribe";
import ProjName from "./Inputs/ProjName";
import Switch_proj from "./Switch_proj";
import FCShowed from "../features/Showed"; 
import '../shared/styles/Btn.css';

const AddProj = () => {
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
            <div className="flex pt-5 items-center">
                <button 
                    onClick={() => setShow(true)} 
                    className="btn-id"
                >
                    Add proj
                </button>
            </div>

            {show && (
                <dialog 
                    ref={dialogRef} 
                    onClose={handleClose} 
                    className="flex flex-col py-5"
                >
                    <span>Number: {CVStore.id_proj}</span>
                    <div className="flex flex-col">
                        <ProjName />
                        <ProjDescribe />
                        <Switch_proj />
                    </div>
                    <button 
                        onClick={() => setShow(false)} 
                        className="mt-4 btn-close"
                    >
                        Close
                    </button>
                </dialog>
            )}
        </div>
    );
};

export default observer(AddProj);
