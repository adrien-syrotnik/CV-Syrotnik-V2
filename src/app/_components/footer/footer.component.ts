import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Hobbie } from 'src/app/models/hobbie';
import { ExperienceOrFormation } from 'src/app/models/experience_or_formation';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { TranslateStorage } from 'src/app/_services/translate-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectStorageService } from 'src/app/_services/project-storage.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkAccount } from 'src/app/models/link-account';

declare var anime: any;
declare var bootstrap: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
      
  }


}
