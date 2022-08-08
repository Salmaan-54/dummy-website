'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventlistener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark theme";
    } else {
        this.textContent = "light theme";
    }

    console.log('current class name: ' + className);
});
