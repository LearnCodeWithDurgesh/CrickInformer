import { Routes } from '@angular/router';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { HomeComponent } from './pages/home/home.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { AllMatchesComponent } from './pages/all-matches/all-matches.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'live',
        pathMatch:'full'
    },
    {
        path:'live',
        component:LiveScoreComponent,
        title:'Live Score'
    },{
        path:'home',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:'CWC2023 Point Table'
    },
    {   
        path:"all-matches",
        component:AllMatchesComponent,
        title:'Matches History'
     }
];
