import { EpmformComponent } from './epmform/epmform.component';
import { Component } from '@angular/core';
import { EmployeeComponent } from "./employee/employee.component";

export const routes = [
    {
        path: '',
        component: EmployeeComponent

    },
    {
        path: ':id',
        component: EpmformComponent

    }
];