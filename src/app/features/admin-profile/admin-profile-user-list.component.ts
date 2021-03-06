import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user";
import {UserProperty} from "../../models/UserProperty";



@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-profile-user-list.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminProfileUserListComponent {
  @Input()
  users: User[] | null = [];

  @Output()
  removeUser: EventEmitter<User> = new EventEmitter<User>()


public remove(user: User): void {
  this.removeUser.emit(user);
}

getUserId(user: User) {
  return user[UserProperty.id];
}

getUserName(user: User) {
  return user[UserProperty.name];
}

getUserSurname(user: User) {
  return user[UserProperty.surname];
}

getUserEmail(user: User) {
  return user[UserProperty.email];
}

getUserAddress(user: User) {
  return user[UserProperty.address];
}

getUserCity(user: User) {
  return user[UserProperty.city];
}
}
