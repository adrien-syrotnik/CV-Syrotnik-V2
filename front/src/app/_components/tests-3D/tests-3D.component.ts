import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectStorageService } from 'src/app/_services/project-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';



import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';


@Component({
  selector: 'app-tests-3D',
  templateUrl: './tests-3D.component.html',
  styleUrls: ['./tests-3D.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tests3DComponent implements OnInit {

  @ViewChild('threeContainer', { static: true }) threeContainer!: ElementRef;

  private timeToChangeColor = 300;

  constructor(private route: ActivatedRoute,
    private projectStorage: ProjectStorageService,
    private router: Router,
    public sanitizer: DomSanitizer,
    public translate: TranslateService) {

  }

  ngOnInit(): void {
    this.initThreeJs();
  }

  initThreeJs(): void {
    const container = this.threeContainer.nativeElement;



    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    // const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    // camera.position.set(15, 15, 30);
    // Orthographic camera setup
    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 10;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2, frustumSize * aspect / 2,
      frustumSize / 2, frustumSize / -2,
      0.1, 1000
    );
    camera.position.set(15, 15, 30);


    var controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 500;

    // 

    var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    var edgesGeometry = new THREE.EdgesGeometry(boxGeometry);

    var lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edgesGeometry);

    var matLine = new LineMaterial({
      color: 0xFFFFFF,
      linewidth: 5,
    });

    var matLine2 = new LineMaterial({
      color: 0x000000,
      linewidth: 5,
    });


    const scaleFactor = 0.3;

    var wireframe = new Wireframe(lineGeometry, matLine);
    wireframe.computeLineDistances();
    wireframe.scale.set(scaleFactor, scaleFactor, scaleFactor);
    scene.add(wireframe);

    var wireframe2 = new Wireframe(lineGeometry, matLine2);
    wireframe2.computeLineDistances();
    wireframe2.scale.set(scaleFactor, scaleFactor, scaleFactor);
    scene.add(wireframe2);


    const onWindowResize = () => {

      // camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // renderer will set this eventually
      matLine.resolution.set(window.innerWidth, window.innerHeight); // resolution of the viewport

      renderer.setSize(window.innerWidth, window.innerHeight);

    }


    var nextColorBlack = true;


    const animateCube = async (from: string, to: string, time: number, matLineToChange: LineMaterial, wireframeToChange: Wireframe) => {
      var startTime = Date.now();
      var endTime = startTime + time / 2;
      let t = 0;
      let color = new THREE.Color(from);
      let nextColor = new THREE.Color(to);
      while (Date.now() < endTime) {
        t = Math.min((Date.now() - startTime) / time, 1);
        color = new THREE.Color().lerpColors(color, nextColor, t);
        matLineToChange.color.set(color);

        // const factor = 0.04;
        // wireframeToChange.scale.set(1 + t * factor, 1 + t * factor, 1 + t * factor);

        //change rotation
        // wireframeToChange.rotation.x += 0.001;

        //Change position
        wireframeToChange.position.x += 0.0015;

        await new Promise(resolve => setTimeout(resolve, 1000 / 60));
      }

      //restart for the next half time
      startTime = Date.now();
      endTime = startTime + time / 2;
      t = 0;
      color = new THREE.Color(to);
      nextColor = new THREE.Color(from);
      while (Date.now() < endTime) {
        t = Math.min((Date.now() - startTime) / time, 1);
        color = new THREE.Color().lerpColors(color, nextColor, t);
        matLineToChange.color.set(color);

        // const factor = 0.04;
        // wireframeToChange.scale.set(1 + (1 - t) * factor, 1 + (1 - t) * factor, 1 + (1 - t) * factor);

        //change rotation
        // wireframeToChange.rotation.x += 0.001;

        //Change position
        wireframeToChange.position.x += 0.0015;

        await new Promise(resolve => setTimeout(resolve, 1000 / 60));
      }


      //Reset
      // wireframeToChange.scale.set(1, 1, 1);
      // wireframeToChange.rotation.x = 0;
      wireframeToChange.position.x = 0;
      //reset color to white
      matLineToChange.color.set(new THREE.Color('white'));
    }

    // Animation loop
    const animateColors = (matLine: LineMaterial, wireframe: Wireframe, nextColorBlack: boolean) => {
      //change color
      // if (nextColorBlack) {
        animateCube('white', 'black', this.timeToChangeColor, matLine, wireframe);
        nextColorBlack = false;
      // } else {
      //   animateCube('black', 'white', this.timeToChangeColor, matLine, wireframe);
      //   nextColorBlack = true;
      // }

      //Wait animation before next color change
      setTimeout(() => {
        animateColors(matLine, wireframe, nextColorBlack);
      }, this.timeToChangeColor);
    }


    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    //Animate instant 1
    animateColors(matLine, wireframe, nextColorBlack);

    //wait half time before starting the second animation
    setTimeout(() => {
      animateColors(matLine2, wireframe2, nextColorBlack);
    }, this.timeToChangeColor / 2);

    animate();
    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();
  }
}
