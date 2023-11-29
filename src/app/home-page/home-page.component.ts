import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "../shared/components/post/post.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
