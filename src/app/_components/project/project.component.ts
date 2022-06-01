import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectStorageService } from 'src/app/_services/project-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


declare var bootstrap : any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {



  project : Project;
  constructor(private route: ActivatedRoute,
              private projectStorage: ProjectStorageService,
              private router: Router,
              public sanitizer: DomSanitizer,
              public translate: TranslateService) {
    

    this.project = this.projectStorage.listProject.find((p) => p.key == this.route.snapshot.paramMap.get('key')) as Project;

  //   let partsFiltered: {
  //     title?: string | undefined;
  //     desc: string;
  //     template?: string | undefined;
  //     video?: any;
  // }[] = [];
  //   this.project.parts?.forEach((part) => {
  //     let newPart : {
  //       title?: string | undefined;
  //       desc: string;
  //       template?: string | undefined;
  //       video?: any;
  //   } = part;
  //     if(part.video)
  //       newPart.video = this.sanitizer.bypassSecurityTrustResourceUrl(part.video);
  //     partsFiltered.push(newPart)
  //   });
  //   this.project.parts = partsFiltered;
  //   console.log(this.project.parts)
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
