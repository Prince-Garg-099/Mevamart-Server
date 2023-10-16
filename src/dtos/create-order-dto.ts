export class CreateOrderDto {
    name: string
    phoneno:string
    pincode: string
    locality:string
    address: string
    city: string
    state:string
    products:{
        _id :string;
        mrp :string;
        name :string;
        desc :string;
        category:string;
        sellprice:string;
        discount:string;
        sstatus:boolean;
        imageUrl:string;
        qnt :string;

    }
    userid:string
    usergid:string
    usergemail: string
    username: string
    ordertime: string
    
   }