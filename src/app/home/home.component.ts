import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any=[]
  getdata(d:any){
    this.data=d
    console.log(this.data)
  }
  constructor(private ds:DataService, private r:Router){
    this.ds.todolist().then(res=>res.json()).then(res=>this.getdata(res))
  }

  deletetodo(e:any){
    console.log(e.target.id)
    this.ds.deleteTodo(e.target.id).then(res=>res.json()).then(res=>{
      if(res['msg']=="Deleted"){
        alert("ToDo Deleted")
        this.r.navigateByUrl('',{skipLocationChange:true}).then(res=>this.r.navigate(['home']))
      }
    })
  }
  logout(){
    localStorage.clear()
    this.r.navigateByUrl('')
  }
}
