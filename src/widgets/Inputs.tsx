import Address from "../entities/Inputs/Address";
import Description from "../entities/Inputs/Description";
import Email from "../entities/Inputs/Email";
import FirstName from "../entities/Inputs/FirstName";
import LastName from "../entities/Inputs/LastName";
import PhoneNumber from "../entities/Inputs/PhoneNumber";
import Title from "../entities/Inputs/Title";
import AddExp from "../entities/AddExp";
import Image from "../entities/Inputs/Image";
import Birth from "../entities/Inputs/Birth";
import Objective from "../entities/Inputs/Objective";
import AddProj from "../entities/AddProj";
import Skills from "../entities/Skills";
import AddInfo from "../entities/Inputs/AddInfo";

export default function Inputs(){
    return(
        <div className="flex flex-col w-1/2 h-full py-5 px-8">
            <p className="text-3xl font-medium mb-[2.625rem] max-sm:text-2xl">СV Creator</p>
            <div className="flex flex-col w-6/7 gap-y-2">
                <p className="text-2xl mb-5 max-sm:text-xl">Personal information</p>
                <Title />
                <FirstName />
                <LastName />
                <Description />
                <Address />
                <Email />
                <PhoneNumber />
                <Image />
                <Birth />
                <Objective />
                <AddInfo />
                <Skills />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-xl font-medium max-sm:text-lg">Work Experience</p>
                <AddExp />
                <p className="text-xl font-medium max-sm:text-lg">Projects</p>
                <AddProj />
            </div>
        </div>
    );
}