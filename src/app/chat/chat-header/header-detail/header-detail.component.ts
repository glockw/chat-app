import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.css']
})
export class HeaderDetailComponent implements OnInit {

  @Input() user: { src:string, name:string};
  @Output('closeHeader') close =  new EventEmitter<void>();
  constructor() { }


  ngOnInit(): void {
  }
  onClose(){
    this.close.emit();
  }

}
