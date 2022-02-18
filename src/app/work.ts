export interface IDesc {
  descText: String;
  creationYear: Date
}

export interface IImg {
  data: Buffer;
  contentType: String
}

export interface ILikes {
  userId: String
}

export interface IDislikes {
  userId: String
}

export interface IPlrty {
  likes: Array<ILikes>;
  Dislikes: Array<IDislikes>
}

export interface IWork {
    name: String;
    desc: IDesc;
    value: String;
    available: Boolean;
    img: IImg;
    maker: String;
    plrty: IPlrty
}

// export class Work implements IWork{
//   public name = "";
//   public desc = {
//     descText = "",
//     creationYear = ""
//   }
// }

// export class workTO implements IWorkTO {
//     public _id = "";
//     public name = "";
//     public descText = "";
//     public creationYear = "";
//     public value = "";
//     public available = true;
//     public data = "";
//     public contentType = "";
//     public makerName= "";
//     public user = "";
//     public likes = 0;
//     public dislikes = 0;
// }
