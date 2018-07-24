import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [
            { path: '', redirectTo: '/main', pathMatch: 'full' },
            { path: 'main', component: ProjectsComponent },
            { path: 'skills', component: SkillsComponent },
            { path: 'contact', component: ContactComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
