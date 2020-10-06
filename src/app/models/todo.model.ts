
export class TodoModel{
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string, completed: boolean = false){
        this.id = new Date().getTime();
        this.text = text;
        this.completed = completed;
    }

}
