import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css'
})
export class PasswordGenerator {

  password: string = "";
  length: number = 12;
  strength: string = "";
  strengthValue: number = 0;

  includeUpperCase: boolean = true;
  includeLowerCase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCase = this.upperCase.toLowerCase();
  numbers = "1234567890";
  special = "!@#$%&?";
  all = this.upperCase + this.lowerCase + this.numbers + this.special;

  createPassword(){
    let characters = "";
    if(this.includeUpperCase){
      characters += this.upperCase;
    }
    if(this.includeLowerCase){
      characters += this.lowerCase;
    }
    if(this.includeNumbers){
      characters += this.numbers;
    }
    if(this.includeSymbols){
      characters += this.special;
    }

    if(characters==""){
      return;
    }

    let password = "";
    for(let i=1; i<=this.length; i++){

      password += characters[Math.floor(Math.random() * characters.length)];
    }
    this.password = password;
    this.checkStrength(password);
  }

  copy(){
    navigator.clipboard.writeText(this.password);
  }

  checkStrength(password: string){
    let score = 0;

    if(password.length >= 8) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[!@#$%&?]/.test(password)) score++;

    this.strengthValue = (score/5) * 100;

    if(score<=2){ this.strength="weak"}
    else if(score<=4){this.strength="medium"}
    else {this.strength="strong"};
  }
}