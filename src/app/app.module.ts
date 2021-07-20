import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ChaussesComponent } from './chausses/chausses.component';
import {DispositifComponent} from './dispositif/dispositif.component';
import { AssainissementsComponent } from './assainissements/assainissements.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { OuvragesComponent } from './ouvrages/ouvrages.component';
import { TerrassementsComponent } from './terrassements/terrassements.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OuvragesFormsComponent } from './ouvrages-forms/ouvrages-forms.component';
import { OuvragesEditComponent } from './ouvrages-edit/ouvrages-edit.component';
import { ChaussesEditComponent } from './chausses-edit/chausses-edit.component';
import {ChaussesFormsComponent} from './chausses-forms/chausses-forms.component';
import { DispositifsFormsComponent } from './dispositifs-forms/dispositifs-forms.component';
import {DispositifsEditComponent} from './dispositifs-edit/dispositifs-edit.component';
import { AssainissementsEditComponent } from './assainissements-edit/assainissements-edit.component';
import { AssainissementsFormsComponent } from './assainissements-forms/assainissements-forms.component';
import { EquipementsFormsComponent } from './equipements-forms/equipements-forms.component';
import { EquipementsEditComponent } from './equipements-edit/equipements-edit.component';
import { TerrassementsEditComponent } from './terrassements-edit/terrassements-edit.component';
import { TerrassementsFormsComponent } from './terrassements-forms/terrassements-forms.component';

const routes: Routes = [{path:'', redirectTo:'ouvrages',pathMatch:'full'},
                        {path:'chausses', component: ChaussesComponent},
                        {path:'dispositifs', component : DispositifComponent},
                        {path:'assainissements', component : AssainissementsComponent},
                        {path:'equipements', component : EquipementsComponent},
                        {path:'ouvrages', component: OuvragesComponent},
                        {path:'terrasements', component : TerrassementsComponent},
                        {path:"ouvragesforms",component:OuvragesFormsComponent},
                        {path:"ouvragesedit",component:OuvragesEditComponent},
                        {path:"chaussesforms", component:ChaussesFormsComponent},
                        {path:"chausseedit", component:ChaussesEditComponent},
                        {path:"dispositifsforms", component:DispositifsFormsComponent},
                        {path:"dispositifsedit", component: DispositifsEditComponent},
                        {path:"assainissementsforms", component:AssainissementsFormsComponent},
                        {path:"assainissementsedit", component: AssainissementsEditComponent},
                        {path:"equipementsforms", component:EquipementsFormsComponent},
                        {path:"equipementssedit", component: EquipementsEditComponent},
                        {path:"terrasementsforms", component:TerrassementsFormsComponent},
                        {path:"terrassementsedit", component: TerrassementsEditComponent},
                        {path:'**', redirectTo:'ouvrages', pathMatch:'full'}
                        ];

@NgModule({
  declarations: [
    AppComponent,
    ChaussesComponent,
    AssainissementsComponent,
    EquipementsComponent,
    OuvragesComponent,
    TerrassementsComponent,
    DispositifComponent,
    OuvragesFormsComponent,
    OuvragesEditComponent,
    ChaussesEditComponent,
    ChaussesFormsComponent,
    DispositifsFormsComponent,
    DispositifsEditComponent,
    AssainissementsEditComponent,
    AssainissementsFormsComponent,
    EquipementsFormsComponent,
    EquipementsEditComponent,
    TerrassementsEditComponent,
    TerrassementsFormsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),HttpClientModule,NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
