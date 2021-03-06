/**
 * Created by rohit on 12/9/16.
 */

import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {ChatComponent} from "./chat/chat.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {HeroService} from "./heroes/heroes.service";

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        ChatComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
