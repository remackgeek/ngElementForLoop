# NgElementForLoop

This project demonstrates two issues with @angular/elements and potential fixes:
* [#23841](https://github.com/angular/angular/issues/23841) -- ngFor
* [#24181](https://github.com/angular/angular/issues/24181) -- SetTimeout()


## Master Branch

[See it here](https://remackgeek.github.io/ngElementForLoop/master/index.html) : Run demonstrate zone/change detection issues, no fixes. SetTimeout() and ngFor cases both broken.

## Branch new-zone

[See it here](https://remackgeek.github.io/ngElementForLoop/new-zone/index.html) : Use zone.js with [PR 1133](https://github.com/angular/zone.js/pull/1133). SetTimeout() works, ngFor still broken.

## Branch custom-strategy

[See it here](https://remackgeek.github.io/ngElementForLoop/custom-strategy/index.html) : Use [elements-zone-strategy](https://github.com/remackgeek/elements-zone-strategy), which uses a similar approach as 
[PR 4185](https://github.com/angular/angular/pull/24185). SetTimeout() and ngFor cases both work.

