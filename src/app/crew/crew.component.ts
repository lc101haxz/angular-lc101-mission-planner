import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  editingMember: object = null;

  constructor() { }

  ngOnInit() {
  }

	add(nameStr: string, first: boolean) {
		for (let i = 0; i < this.crew.length; i++) {
			if (this.crew[i]['name'] === nameStr) {
				return;
			}
		}
		this.crew.push({name: nameStr, firstMission: first});
	}
	remove(member: object) {
		this.crew.splice(this.crew.indexOf(member), 1);
	}
	edit(member: object) {
		this.editingMember = member;
	}
	save(nameStr: string, member: object) {
		member['name'] = nameStr;
		this.editingMember = null;
	}
}
