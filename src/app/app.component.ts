import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerStatusService } from './services/server-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent,  CommonModule, RouterModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
   }

   serverOnline: boolean = true;

   constructor(private serverStatusService: ServerStatusService) {}
 
   ngOnInit() {
    this.serverStatusService.checkServerStatus().subscribe((status: boolean) => {
      this.serverOnline = status;
      if (!status) {
        console.error('O servidor está offline.');
      }
    });
  }
 }
