import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getRequestParams } from 'src/core/utils/utilities';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  constructor(protected httpClient: HttpClient, protected url: string) {}

  getApi(id?: string): Observable<T> {
    if (id) {
      return this.httpClient.get<T>(`${environment.apiUrl}/${this.url}/${id}`);
    }
    return this.httpClient.get<T>(`${environment.apiUrl}/${this.url}`);
  }

  getAllApi(
    pageNo?: string,
    pageSize?: string,
    filter?,
    sorting?
  ): Observable<ApiResponse<T[]>> {
    return this.httpClient.get<ApiResponse<T[]>>(
      `${environment.apiUrl}/${this.url}/GetAll`,
      {
        params: getRequestParams(
          filter,
          pageNo && pageSize ? { index: pageNo, size: pageSize } : undefined,
          sorting
        ),
      }
    );
  }

  postApi(createObject?: T): Observable<T> {
    return this.httpClient.post<T>(
      `${environment.apiUrl}/${this.url}`,
      createObject
    );
  }

  putApi(id?: string, updateObject?: T): Observable<T> {
    return this.httpClient.put<T>(
      `${environment.apiUrl}/${this.url}/${id}`,
      updateObject
    );
  }

  deleteApi(id?: string): Observable<T> {
    return this.httpClient.delete<T>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
