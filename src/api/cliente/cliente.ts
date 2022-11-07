export class Cliente {

    public id:number=0;
    public data:string=new Date().toLocaleDateString("pt-br",{day:"2-digit",month:"2-digit",year:"numeric"});
    public nome:string="";
    public telefone:string="";
    public email:string="";
    public cep:string="";
    public foto:string[]=[];
}
