import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobsearch'
})
export class JobsearchPipe implements PipeTransform {

  transform(jobs:object[], searchterm:string): unknown {
  
    if(searchterm==undefined)
    {
      return jobs
    }

    return jobs.filter((x)=>x['jobtitle'].toLowerCase().indexOf(searchterm.toLowerCase())!==-1
    )
    
  }

}
