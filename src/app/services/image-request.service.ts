import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageRequestService {

  private requestUrl = 'https://vision.googleapis.com/v1p3beta1/images:annotate?key=AIzaSyCupsz_AoPxPSUNNHHKB1CMKfNJ41R0Xw0';

  constructor(private http: HttpClient) { }

  /**
   * Request Google Vision API for text in image
   * @param image Base64 encoding using alphanumeric, "-" and "_" characters
   */
  request(image: string): Observable<any> {
    const req = {
      'requests': [
        {
          'image': {
            'content': image
          },
          'features': [
            {
              'type': 'DOCUMENT_TEXT_DETECTION'
            }
          ],
          'imageContext': {
            // 'languageHints': ['en-t-i0-handwrit']
          }
        }
      ]
    };

    return this.http.post(this.requestUrl, req).pipe(
      catchError(e => {
        console.error(e);
        return of({});
      })
    );
  }
}
