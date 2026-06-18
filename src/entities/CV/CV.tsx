import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useReactToPrint } from "react-to-print";
import CVStore from "../../store/CV";
import '../../shared/styles/CV.css';
import '../../shared/styles/Btn.css';
import Avatar from '../../shared/img/avatar.svg';
import Skills from "../Skills";

const CV = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const contentSave = useReactToPrint({
        contentRef,
        documentTitle: CVStore.title,
        bodyClass: "print-style",
    })

    const imageURL = CVStore.img ? URL.createObjectURL(CVStore.img) : "";


    return(
        <div ref={contentRef} className="w-[50vw] h-screen flex bg-white text-black px-5">
            <div className="flex flex-col gap-3 border-r pr-3 w-1/4">
                {imageURL != ""?
                (
                    <>
                        <img
                        src={imageURL}
                        alt="Your avatar" 
                        className="w-[100px] h-[100px] rounded-4xl"/>
                    </>
                )
                :
                (
                    <>
                        <img
                        src={Avatar}
                        alt="Avatar img"
                        className="w-[100px] h-[100px]"
                        />                    
                    </>
                )
                }

                <p className="font-medium text-xl mb-3 text-wrap max-sm:text-lg">Personal infomation</p>
                <p className="font-medium text-lg max-sm:text-base">Name</p>
                <p className="font-sans mb-2">
                    {CVStore.firstName} {CVStore.lastName}
                </p>

                <p className="font-medium text-lg max-sm:text-base">Address</p>
                <p className="font-sans mb-2">
                    {CVStore.address}
                </p>

                <p className="font-medium text-lg text-pretty max-lg:text-balance">Phone Number</p>
                <p className="font-sans mb-2">{CVStore.phonenumber}</p>

                <p className="font-medium text-lg text-pretty max-lg:text-balance">Date of birth</p>
                <p className="font-sans mb-2">{CVStore.birth}</p>


                <p className="font-medium text-lg">Email</p>
                <p className="font-sans">{CVStore.email}</p>

                <div className="flex mt-auto">
                    <button
                        onClick={()=>contentSave()}
                        className="btn-id">
                            <span>Save</span>
                    </button>
                </div>

            </div>

            <div className="flex flex-col pl-5 w-full py-5">
                <p className="font-medium text-lg max-sm:text-base">{CVStore.firstName} {CVStore.lastName}</p>
                <p className="font-sans">{CVStore.description}</p>

                <hr className="my-3"/>

                <p className="font-medium text-lg mb-2">Work Experience</p>

                {Object.keys(CVStore.experience).map((id)=>{
                    const el = CVStore.experience[id];
                    if (el[0].length != 0 || el[1].length != 0){
                        return(
                            <div key={id}>
                                <span className="font-medium">{id}. </span>
                                <span className="font-bold text-pretty max-lg:text-balance">{el[0]}</span>
                                <p className="mb-5 font-sans text-pretty max-lg:text-balance">{el[1]}</p>
                            </div>
                        );
                    }
                })}

                <hr className="my-3"/>

                <p className="font-medium text-lg max-sm:text-base mb-2">Objective</p>
                <p className="mb-5 font-sans text-pretty max-lg:text-balance">
                    {CVStore.objective}
                </p>

                <hr className="mb-3"/>

                <p className="mb-1 font-medium text-lg max-sm:text-base mb-2">Skills</p>
                <Skills />

                <hr className="my-3"/>

                <p className="mb-5 font-medium text-lg max-sm:text-base mb-2">Additional information</p>

                <p className="mb-5 font-sans text-pretty max-lg:text-balance">
                    {CVStore.inform}
                </p>

                <hr className="mb-3"/>

                <p className="font-medium text-lg max-sm:text-base mb-2">Projects</p>

                {Object.keys(CVStore.proj).map((id)=>{
                    const el = CVStore.proj[id];
                    if (el[0].length != 0 || el[1].length != 0){
                        return(
                            <div key={id}>
                                <span className="font-medium">{id}. </span>
                                <span className="font-semibold text-pretty text-lg max-lg:text-balance">{el[0]}</span>
                                <p className="mb-5 font-sans text-pretty max-lg:text-balance mt-5">{el[1]}</p>
                            </div>
                        );
                    }
                })}
            </div>

            

        </div>
    );
}
export default observer(CV);