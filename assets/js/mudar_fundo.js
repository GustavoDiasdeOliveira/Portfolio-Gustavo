const mode = document.getElementById('mode_icon');

    mode.addEventListener('click', () => {
         const body = document.body;
        if (mode.classList.contains('bi-moon-fill')) {
            mode.classList.remove('bi-moon-fill');
            mode.classList.add('bi-sun-fill');
            body.classList.add('dark');
        } else {
            mode.classList.add('bi-moon-fill');
            mode.classList.remove('bi-sun-fill');
            body.classList.remove('dark');
        }
    });