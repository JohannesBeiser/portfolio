import { Component, OnInit } from '@angular/core';


export interface iSkillItem{
  iconPath: String,
  technology: String,
  skillLevel: String
}


@Component({
  selector: 'app-about-site',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  private testWidth ="10%";
  public skillItems: iSkillItem[];

  ngOnInit() {
    this.skillItems=[
      {
        iconPath: "../../../assets/icons/html.svg",
        technology: "HTML, CSS/LESS",
        skillLevel: "90%"
      },{
        iconPath: "../../../assets/icons/javascript.webp",
        technology: "Javascript, Typescript",
        skillLevel: "70%"
      },{
        iconPath: "../../../assets/icons/node.webp",
        technology: "Node.js + Express",
        skillLevel: "60%"
      },{
        iconPath: "../../../assets/icons/angular.svg",
        technology: "Angular",
        skillLevel: "45%"
      },{
        iconPath: "../../../assets/icons/mongodb.webp",
        technology: "MongoDB",
        skillLevel: "55%"
      },{
        iconPath: "../../../assets/icons/vue.webp",
        technology: "Vue",
        skillLevel: "30%"
      },{
        iconPath: "../../../assets/icons/git.webp",
        technology: "Git",
        skillLevel: "80%"
      },{
        iconPath: "../../../assets/icons/jquery.webp",
        technology: "JQuery",
        skillLevel: "95%"
      },{
        iconPath: "../../../assets/icons/adobe.svg",
        technology: "Photoshop & Lightroom",
        skillLevel: "65%"
      }
    ];
  }
}