import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  createId(): string {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		return Array.from({length: 5}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
	}
}
