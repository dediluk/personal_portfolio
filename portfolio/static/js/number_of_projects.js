let number_of_projects_h2 = document.querySelector('.just_p'),
    number_of_projects = number_of_projects_h2.getAttribute('data-number'),
    start = 0;

function increasing() {
    if (start == number_of_projects) clearInterval(interval);
    number_of_projects_h2.textContent = start++;
}

let interval = setInterval(increasing, 290);

