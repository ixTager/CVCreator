import { makeAutoObservable } from "mobx";
class Store {
    id:number = 1
    address: string = "Address";
    description: string = "Description";
    email: string = "email@email.com";
    firstName: string = "First Name";
    lastName: string = "Last Name";
    phonenumber: string = "+1 123 456 78 90";
    title: string = "Title";
    img:File | null = null;
    birth: string = "00.00.0000";
    objective:string = "Your objective";
    showed:boolean = false;
    id_proj:number = 1;
    selected_HS:string = "";
    selected_SS:string = "";
    selected_XYZ:string = "";
    inform:string = "";

    proj: {[key: string]: [string, string] } = {
        1: ["", ""],
        2: ["", ""],
        3: ["", ""],
    };


    experience: {[key: string]: [string, string] } = {
        1: ["", ""],
        2: ["", ""],
        3: ["", ""],
    };
    
    constructor(){
        makeAutoObservable(this);
    }

    setPosition(id: number, position : string){
        this.experience[id][0] = position;
    }
    setDescribe(id:number, describe : string){
        this.experience[id][1] = describe;
    }
    nextId() {
        if (this.id < Object.keys(this.experience).length) {
            this.id++;
        }
    }

    prevID() {
        if (this.id > 1) {
            this.id--;
        }
    }

    setImg(image:File | null){
        this.img = image;
    }
        
    nextProjId() {
        if (this.id_proj < Object.keys(this.experience).length) {
            this.id_proj++;
        }
    }

    prevProjID() {
        if (this.id_proj > 1) {
            this.id_proj--;
        }
    }

    setShowedProj(){
        this.showed = true;
    }
    setCloseProj(){
        this.showed = false;
    }

}
const CVStore = new Store();
export default CVStore;

