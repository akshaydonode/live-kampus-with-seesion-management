import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
            user:User[];

            constructor(private friend: UserService){}

            // ngOnInit(){
                
            //     this.user = new User();
            // }
            search(){
                let name = (<HTMLInputElement>document.getElementById("search")).value;
                console.log(name);
                this.friend.searchFriend(name).subscribe((data) => {
                    this.user = data;
                

                });
            }
}


