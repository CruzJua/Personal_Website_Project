//Wait for page to load
document.addEventListener('DOMContentLoaded', function(){

    //Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const altToggle = document.getElementById('alt-theme');
    const theme = document.getElementById('stylesheet')

        const altTheme = localStorage.getItem('altTheme')
    if (altTheme === 'true') {
        theme.className = 'alt-theme'
        theme.setAttribute('href', 'css/style2.css');
        altToggle.textContent = 'Normal Theme';
        themeToggle.hidden = 'true';
    }

    //Check if user had a saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = 'Dark Mode';
    }



    //Add click event to theme toggle button
    themeToggle.addEventListener('click', function() {
        //Toggle the light theme class
        body.classList.toggle('light-theme');

        //Check if the light theme is now active
        const isLight = body.classList.contains('light-theme');

        //Update button text
        themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode'

        //Save the theme preferences
        localStorage.setItem('theme', isLight ? 'light' : 'dark')
    });




    altToggle.addEventListener('click', function() {
        theme.classList.toggle('alt-theme');

        //Check if the alt theme is now active
        const isAltTheme = theme.classList.contains('alt-theme');

        //Update button text
        altToggle.textContent = isAltTheme ? 'Alt Theme' : 'Normal Theme'

        if (isAltTheme) {
            theme.setAttribute('href', 'css/style2.css');
            localStorage.setItem('altTheme', "true");
            themeToggle.hidden = 'true';
        } else {
            theme.setAttribute('href', 'css/style.css');
            localStorage.setItem('altTheme', "false");
            themeToggle.hidden = 'false';
        }
    });
});