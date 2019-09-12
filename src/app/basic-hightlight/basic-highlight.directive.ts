import {Directive, ElementRef, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Directive({
    selector: '[appBasicHighlight]'
    })

    export class BasicHighlightDirective implements OnInit{
        constructor(private elementRef: ElementRef){

        }
        ngOnInit(){
            this.elementRef.nativeElement.style.backgroundColor = 'green';
        }


    }
