import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from './types/getFeedResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(private http : HttpClient) { }

    getFeed(url : string) : Observable<GetFeedResponseInterface>{
      const fullurl = environment.apiUrl + url;
      return this.http.get<GetFeedResponseInterface>(fullurl);
    }

}
