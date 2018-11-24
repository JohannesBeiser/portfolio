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
  private skillItems: iSkillItem[];

  ngOnInit() {
    this.skillItems=[
      {
        iconPath: "../../../assets/icons/html.svg",
        technology: "HTML, CSS/LESS",
        skillLevel: "90%"
      },{
        iconPath: "../../../assets/icons/javascript.png",
        technology: "Java- & Typescript",
        skillLevel: "70%"
      },{
        iconPath: "../../../assets/icons/angular.svg",
        technology: "Angular",
        skillLevel: "45%"
      },{
        iconPath: "../../../assets/icons/node.png",
        technology: "Node.js",
        skillLevel: "60%"
      },{
        iconPath: "../../../assets/icons/mongodb.png",
        technology: "MongoDB",
        skillLevel: "55%"
      },{
        iconPath: "../../../assets/icons/express.png",
        technology: "Express",
        skillLevel: "50%"
      },{
        iconPath: "../../../assets/icons/vue.png",
        technology: "Vue",
        skillLevel: "30%"
      },{
        iconPath: "../../../assets/icons/git.png",
        technology: "Git",
        skillLevel: "85%"
      },{
        iconPath: "../../../assets/icons/jquery.png",
        technology: "JQuery",
        skillLevel: "95%"
      }
    ];
  }
}
