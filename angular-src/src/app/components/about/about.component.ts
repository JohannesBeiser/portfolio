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
        skillLevel: "95%"
      },{
        iconPath: "../../../assets/icons/javascript.png",
        technology: "Javascript, Typescript",
        skillLevel: "80%"
      },{
        iconPath: "../../../assets/icons/node.png",
        technology: "Node.js + Express",
        skillLevel: "80%"
      },{
        iconPath: "../../../assets/icons/angular.svg",
        technology: "Angular",
        skillLevel: "85%"
      },{
        iconPath: "../../../assets/icons/mongodb.png",
        technology: "MongoDB",
        skillLevel: "55%"
      },{
        iconPath: "../../../assets/icons/vue.png",
        technology: "Vue",
        skillLevel: "20%"
      },{
        iconPath: "../../../assets/icons/git.png",
        technology: "Git",
        skillLevel: "90%"
      },{
        iconPath: "../../../assets/icons/jquery.png",
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
