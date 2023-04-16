export class Todo {

    
    sno : number 
    title : String 
    desc : String 
    active : Boolean
    


    
    constructor( sno: number ,title: string, desc: string, active: boolean) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }

}