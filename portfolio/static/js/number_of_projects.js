let number_of_projects = document.querySelector('.number_of_projects_text').getAttribute('data-number'),
    number_of_projects_h2 = document.querySelector('.number_of_projects_text'),
    start = 0;

function increasing() {
    if (start == number_of_projects) {
        clearInterval(interval);
    }
    console.log(number_of_projects_h2.textContent.slice(1,-1) + start)
    number_of_projects_h2.textContent = number_of_projects_h2.textContent.slice(1,-1) + start
    start += 1;
}

let interval = setInterval(increasing, 260);

