import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'careerJobSearch'
})
export class CareerJobSearchPipe implements PipeTransform {

  transform(jobs:object[], searchterm:string): unknown {
  
    if(searchterm==undefined)
    {
      return jobs
    }

    return jobs.filter((x)=>x['jobtitle'].toLowerCase().indexOf(searchterm.toLowerCase())!==-1
    )
    
  }

}
