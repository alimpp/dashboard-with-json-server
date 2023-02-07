export interface ITickets {
    id : number , 
    email : string ,
    title : string, 
    body : string ,
    message : string
}

export interface ITasks {
    id : number , 
    body : string , 
    title : string ,
    status : string , 
    assigned : object
}