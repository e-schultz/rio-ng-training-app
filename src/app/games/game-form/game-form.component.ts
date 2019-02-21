import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Form, Validators, FormGroup } from "@angular/forms";
import { Game, GamesService } from "../games/games.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
  styleUrls: ["./game-form.component.scss"]
})
export class GameFormComponent implements OnInit {
  form: FormGroup;
  @Input() game: Game;
  constructor(
    private fb: FormBuilder,
    private gamesService: GamesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [""],
      name: ["", [Validators.required]],
      image: ["", [Validators.required]],
      platformId: [""],
      priority: [""],
      numberOfHoursPlayed: [""],
      numberOfHoursToComplete: [""],
      isComplete: [""]
    });
  }

  ngOnInit() {
    this.form.patchValue(this.game);
  }
  onSubmit() {
    this.gamesService.update(this.form.value).subscribe(n => {
      this.router.navigate(["/games"]);
    });
  }
}
