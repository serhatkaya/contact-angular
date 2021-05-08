import { HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export function generateModel(fg: FormGroup): any;
export function generateModel(fg: FormGroup, id: any): any;
export function generateModel(fg: FormGroup, id: any, toMerge: any): any;

export function generateModel(fg: FormGroup, id?: any, toMerge?: any): any {
  let obj = Object.assign({}, fg.value);
  if (toMerge) {
    obj = { ...toMerge, ...obj };
  }

  if (!id) {
    return obj;
  } else {
    obj.id = id;
    return obj;
  }
}

export function getRequestParams(
  filterModel,
  paging: { index: string; size: string },
  sorting: { sortBy: 0 | 1; sort: string }
) {
  let params = new HttpParams();
  if (filterModel) {
    Object.keys(filterModel).forEach((key) => {
      if (filterModel[key] != null && filterModel[key] != '')
        params = params.append(key, filterModel[key]);
    });
  }

  if (sorting) {
    if (sorting.sort != '') {
      params = params.append('sortBy', sorting.sortBy.toString());
      params = params.append('sort', sorting.sort);
    }
  }

  if (paging) {
    params = params.append('size', paging.size);
    params = params.append('index', paging.index);
  }

  return params;
}
