import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from "../../models/user";
import {UserProperty} from "../../models/UserProperty";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
})
export class UserListContainerComponent implements OnInit {

  public users: Subject<User[]> = new Subject<User[]>();

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.reloadUsers();
  }

  removeUser(user: User) {
    this.userService.delete(user[UserProperty.id]!).subscribe(() => {
      this.reloadUsers();
    });
  }

  private reloadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users.next(users);
    });
  }


}
