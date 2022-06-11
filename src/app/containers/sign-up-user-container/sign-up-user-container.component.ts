import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ResolverResponse} from "../../constants/resolver-response.constaints";
import {Route} from "../../constants/route.constants";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {UserProperty} from "../../models/UserProperty";


@Component({
  selector: 'sign-up-user-container',
  templateUrl: './sign-up-user-container.component.html',
})
export class SignUpUserContainerComponent implements OnInit {

  public user: User | undefined;
  private isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.user = response[ResolverResponse.USER];
      });
    }
  }


  handleSaveUser(user: User): void {
    if (this.isEditing) {
      this.userService.update(user[UserProperty.id]!, user).subscribe(() => {
        this.router.navigate([Route.USERS]);
      });
    } else {
    this.userService.create(user).subscribe(() => {
      this.router.navigate([Route.USERS]);
    });
  }
    }
}
