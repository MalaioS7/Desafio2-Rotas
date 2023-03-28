import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {
  id: number = 0;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log(this.id)
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
