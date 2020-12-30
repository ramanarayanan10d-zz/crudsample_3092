import { Component, OnInit } from '@angular/core';

import { UpdatedeleteService } from './updatedelete.service';



@Component({
  selector: 'app-updatedelete',
  templateUrl: './updatedelete.component.html',
  styleUrls: ['./updatedelete.component.scss'],
})
export class UpdatedeleteComponent implements OnInit {

detailsId;
details = {
   name: '',
   email: ''
};

  constructor(
private updatedeleteService: UpdatedeleteService
  ) { }

  ngOnInit() {
    this.GpGetNounById();
  }

GpGetNounById() {
 this.updatedeleteService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.details = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpUpdate() {
 this.updatedeleteService.GpUpdate(this.details)
  .subscribe(
    data => {
 this.details.name = '';

 this.details.email = '';

       console.log('data updated successfully --- ', data);
    },
    error => {
       console.log('cannot able to update the data --- ', error);
    }
    );
}
GpDelete() {
 this.updatedeleteService.GpDelete(this.detailsId)
  .subscribe(
    data => {
       console.log('data deleted successfully --- ', data);
    },
    error => {
       console.log('cannot able to delete the data --- ', error);
    }
    );
}

}