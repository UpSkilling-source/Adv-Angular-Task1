import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'} ,
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'services' , component:ServicesComponent},
  {path:'skills' , component:SkillsComponent},
  {path:'education' , component:EducationComponent},
  {path:'experience' , component:ExperienceComponent},
  {path:'work' , component:WorkComponent},
  {path:'blog' , component:BlogComponent},
  {path:'contact' , component:ContactComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
