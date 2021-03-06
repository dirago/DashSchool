import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";

import {Student} from "../models/student";


@Injectable()
export class ListingService {

  private listingUrl: string = 'https://raphaeldirago.com/dashSchool/api/web/listing';
  private studentUrl: string = 'https://raphaeldirago.com/dashSchool/api/web/listing/detailStudent/';
  
  students: Observable<Student[]>;
  student: Observable<Student []>;

  constructor(private http: Http) {
  }


  getListing(){
     return this.http.get(this.listingUrl)
            .map((res: Response) => <Student[]> res.json())
            .catch(this.handleError);
   }
  getStudent(id:number){
    return this.http.get(this.studentUrl+id)// rajouter interpo de id
      .map((res: Response) => <Student[]> res.json() )
      .catch(this.handleError);
  }



  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}


