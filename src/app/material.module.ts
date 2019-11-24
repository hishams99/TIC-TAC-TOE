import {NgModule} from '@angular/core';


import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule

} from '@angular/material';

@NgModule({
    imports:[
        MatToolbarModule,
        MatButtonModule,
        MatInputModule
    ],

    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatInputModule
    ]
})