# NgElementForLoop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Master Branch

Run demonstrate zone/change detection issues, no fixes. SetTimeout() and ngFor cases both broken.

## Branch new-zone

Use zone.js with [PR 1133](https://github.com/angular/zone.js/pull/1133). SetTimeout() works, ngFor still broken.

## Branch custom-strategy

Use [elements-zone-strategy](https://github.com/remackgeek/elements-zone-strategy), which uses a similar approach as 
[PR 4185](https://github.com/angular/angular/pull/24185). SetTimeout() and ngFor cases both work.

