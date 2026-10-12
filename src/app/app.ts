import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ConnectionStatus = 'online' | 'away' | 'offline';
type ThemeMode = 'dark' | 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './app.component.css',
  templateUrl: './app.html',
})

export class App 
{
  status: ConnectionStatus = 'online';
  theme: ThemeMode = 'dark';

  readonly students = [
    { name: 'Катя', score: 92 },
    { name: 'Максим', score: 76 },
    { name: 'Оля', score: 44 },
  ];

  get statusText(): string 
  {
    return this.status;
  }

  getStatusClass(): string 
  {
    switch (this.status) {
      case 'online':
        return 'status status-online';
      case 'away':
        return 'status status-away';
      case 'offline':
        return 'status status-offline';
      default:
        return 'status';
    }
  }

  getScoreColor(score: number): string 
  {
    if (score >= 80) {
      return '#22c55e';
    }
    if (score >= 50) {
      return '#fbbf24';
    }
    return '#ef4444';
  }

  toggleTheme(): void 
  {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}

