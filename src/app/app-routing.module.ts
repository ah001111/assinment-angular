import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { STARTFRAMEWORKComponent } from './startframework/startframework.component';

const routes: Routes = [
  {path :'' , redirectTo:'/START FRAMEWORK' , pathMatch:'full'},
  {path:'START FRAMEWORK' , component:STARTFRAMEWORKComponent },
  {path:'ABOUT' , component:AboutComponent},
  {path:'PORTFOLIO' , component:PortFolioComponent},
  {path : 'CONTACT' , component:ContactComponent},
  {path : '**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
