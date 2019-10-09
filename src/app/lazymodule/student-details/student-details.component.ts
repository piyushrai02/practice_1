import { Component, OnInit } from "@angular/core";
import { StudentDetailsService } from "./student-details.service";


@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"]
})
export class StudentDetailsComponent implements OnInit {
  config: any = [];
  keyss: any;
  valuess: any = [];
  groups=[];
  group_member= [];
  element_Key:any;

  constructor(private studentDetils: StudentDetailsService) {}

  ngOnInit() {
    this.student();
  }

  student() {
    this.studentDetils.getStudentDetails().subscribe(data => {

      this.config = data;

      this.config = this.config.filter(function(age) {
        return age.employee_age < 100 && age.employee_age>=0;
      });

      this.config.sort(this.compareFunction);
      
      // this.config.sort(function (a,b) {
      //   this.compareFunction(b,a)
      // });
      
      this.config.forEach((el) => {
        if(this.groups.indexOf(el.employee_age) == -1) {
          this.groups.push(el.employee_age)
        }
      })

      this.groups.forEach((age)=>{
        let emp = this.config.filter((el)=>{
          if(el.employee_age == age){
            return el;
          }
        })
        this.group_member.push({
          ageGroup: age,
          employees: emp
        });
      })
      console.log(this.group_member)
    });
  }

  compareFunction(a, b){
    return  a.employee_age - b.employee_age
  }
  
}
