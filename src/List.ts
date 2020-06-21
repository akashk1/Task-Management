export class List {
    _id : string;
    user_id: string;
    start_date:string;
    deadline_date:string;
    task: string;
    label: string;
    status:string;
    constructor(id:string,user_id:string,start_date:string,deadline_date:string,task:string,label:string,status:string){
        this._id = id;
        this.user_id = user_id;
        this.start_date = start_date;
        this.deadline_date = deadline_date;
        this.label = label;
        this.task = task;
        this.status = status;
    }
}