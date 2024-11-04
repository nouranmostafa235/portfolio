import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  downloadFile() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1GADU4VaZ0nXXoaXh3lIzfUF0B05cnY9k';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'NouranMostafa_Front-End Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
