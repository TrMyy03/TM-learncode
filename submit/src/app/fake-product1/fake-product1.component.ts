import { Component } from '@angular/core';
import { FakeProduct1Service } from '../fake-product1.service';

@Component({
  selector: 'app-fake-product1',
  templateUrl: './fake-product1.component.html',
  styleUrls: ['./fake-product1.component.css']
})
export class FakeProduct1Component {
  data:any
  errMessage:string=''
  constructor(_service:FakeProduct1Service){
  _service.getFakeProductData().subscribe({
  next:(data)=>{ this.data=data},
  error:(err)=>{
  this.errMessage=err 
  }
  })
  }
  }
  