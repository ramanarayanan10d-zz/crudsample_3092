import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class UpdatedeleteService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpGetNounById(detailsId: string): Observable<any> {
 return this.http.get(this.sharedService.DESKTOP_API + `/details/${detailsId}`);
}
GpUpdate(details: any): Observable<any> {
 return this.http.put(this.sharedService.DESKTOP_API + '/details', details);
}
GpDelete(detailsId: string): Observable<any> {
 return this.http.delete(this.sharedService.DESKTOP_API + `/details/${detailsId}`);
}

}