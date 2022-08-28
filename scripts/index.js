function viewMore() {
    let viewElement = document.getElementById('view-btn');
    if (viewElement.innerText === 'View More') {
        document.getElementsByClassName('more-cities')[0].style.display = 'block';
        viewElement.innerText = 'View Less';
    }
    else {
        document.getElementsByClassName('more-cities')[0].style.display = 'none';
        viewElement.innerText = 'View More';
    }
}