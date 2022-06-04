import {UserProperty} from "./UserProperty";

export class User{
  [UserProperty.id]?: string;
  [UserProperty.name]: string;
  [UserProperty.surname]: string;
  [UserProperty.email]: string
  [UserProperty.password]: string;
  [UserProperty.address]: string;
  [UserProperty.city]: string;

}
