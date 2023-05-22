function changeTheme () {
    const body = document.querySelector('body');

    const navigationBar = document.getElementsByClassName('navigationBar')[0];
    const themeButton = document.getElementsByClassName('themeButton')[0];
    const socialLinks = document.getElementsByClassName('socialLinks')[0];
    const resume = document.getElementsByClassName('resume')[0];


    themeButton.classList.toggle('darkMode');
    body.classList.toggle('darkMode');
    navigationBar.classList.toggle('darkMode');
    socialLinks.classList.toggle('darkMode');
    resume.classList.toggle('darkMode');

}