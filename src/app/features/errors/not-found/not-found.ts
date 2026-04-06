import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  imports: [CommonModule, RouterModule, ButtonModule],
})
export class NotFound {}
