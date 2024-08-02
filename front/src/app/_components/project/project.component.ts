import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectStorageService } from 'src/app/_services/project-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


declare var bootstrap : any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  project : Project;
  constructor(private route: ActivatedRoute,
              private projectStorage: ProjectStorageService,
              private router: Router,
              public sanitizer: DomSanitizer,
              public translate: TranslateService) {
    

    this.project = this.projectStorage.listProject.find((p) => p.key == this.route.snapshot.paramMap.get('key')) as Project;
  }

  ngOnInit(): void {
    setTimeout(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
        })
      })
    });
  }

  back() {
    this.router.navigate(['/'], { fragment: 'projects' });
  }

}
