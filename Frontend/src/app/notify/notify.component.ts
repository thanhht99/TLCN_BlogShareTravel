import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent{


  @Input() message = { body: '', type: '' };

  setMessage(body, type, time = 3000): void {
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => this.message.body = '', time);
  }

}
