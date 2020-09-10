import { NgModule } from '@angular/core';
import { MatButtonModule  } from '@angular/material/button';
import { MatInputModule  } from '@angular/material/input';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatNavlist} from '@angular/material/list';
import {MatListModule} from '@angular/material/list';



const MaterialComponents=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
  
  


]

@NgModule({

  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
