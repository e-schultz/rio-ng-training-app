import { Component, OnInit } from "@angular/core";
import { ProfileService, Profile } from "../profile-service/profile.service";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"]
})
export class ViewProfileComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  profile: Profile;
  ngOnInit() {
    this.profileService.get().subscribe(profile => {
      this.profile = profile;
    });
  }
}
