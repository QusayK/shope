import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        DropdownDirective
    ],
    imports: [
        RouterModule, 
        CommonModule, 
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule { }