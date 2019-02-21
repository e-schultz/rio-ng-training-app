import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Profile {
  firstName: string;
  lastName: string;
  id: number;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
}
@Injectable()
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Profile>("http://localhost:3000/profile");
  }
  update(profile: Profile) {
    return this.httpClient.put(
      `http://localhost:3000/profile`,
      profile
    );
  }
}
