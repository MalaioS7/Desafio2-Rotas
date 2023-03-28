import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button3',
  templateUrl: './button3.component.html',
  styleUrls: ['./button3.component.css']
})
export class Button3Component implements OnInit {
  id: number = 0;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    })
  }
}
