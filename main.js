//Wait for page to load
document.addEventListener('DOMContentLoaded', function(){

    //Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

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
});