# Angular Password Generator

A modern and customizable password generator built using the latest version of Angular. This project allows users to generate secure passwords with multiple customization options and a real-time strength indicator.

## Features

- Adjustable password length using a slider
- Include/Exclude: 
    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Special characters
- Real-time password strength indicator
- Visual strength bar (color-based)
- Copy password to clipboard

## Tech Stack

- Angular (Latest Version - Standalone Components)
- TypecSript
- HTML5
- CSS3

## Project Structure

- src/ 
    - app/ 
        - password-generator/ 
        - password-generator.ts 
        - password-generator.html  
        - password-generator.css 
    - app.ts 
    - app.html

## How to Run the Project Locally

1. Clone the repository
git clone https://github.com/sourverb/angular-password-generator.git

2. Navigate into the project folder
cd angular-password-generator

3. Install dependencies
npm install 
This install all the required packages for the project.

4. Install Angular CLI (if not installed)
npm install -g @angular/cli

5. Run the application
ng serve

6. Open in browser
Go to: http://localhost:4200

## What I Learned
- Angular standalone component architecture
- Data binding ([value], (click), [(ngModel)])
- Structural directives (*ngIf)
- Dynamic class binding ([ngClass])
- Component-based design
- Basic Git & GitHub workflow

## Contributing

- This is a beginner project, but suggestions and improvements are always welcome!
