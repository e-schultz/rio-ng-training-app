import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../profile-service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) {}
  profile: Profile;
  ngOnInit() {
    this.profileService.get().subscribe(profile => {
      this.profile = profile;
    });
  }


  saveProfile($event) {
    const updatedProfile = {...this.profile, ...$event};
    this.profileService.update(updatedProfile).subscribe(updated=>{
      console.log('updated',updated);
      this.router.navigate(['/my-profile'])
    }, err=>{
      console.log(`any error?`, err)
    },()=>{
      console.log('stream is complete');
    })
  }

}
