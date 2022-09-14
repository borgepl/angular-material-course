import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {CourseComponent} from "./course/course.component";
import {CoursesService} from "./services/courses.service";
import {HttpClientModule} from "@angular/common/http";
import {CourseResolver} from "./services/course.resolver";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateCourseComponent} from './create-course/create-course.component';
import {CreateCourseStep1Component} from './create-course/create-course-step-1/create-course-step-1.component';
import {CreateCourseStep2Component} from './create-course/create-course-step-2/create-course-step-2.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';

import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {VirtualScrollingComponent} from './virtual-scrolling/virtual-scrolling.component';
import { AppMaterialModule } from './app-material.module';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SideNavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        SideNavListComponent,
        HomeComponent,
        AboutComponent,
        CourseComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        CreateCourseComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        DragDropComponent,
        TreeDemoComponent,
        VirtualScrollingComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        CoursesService,
        CourseResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
