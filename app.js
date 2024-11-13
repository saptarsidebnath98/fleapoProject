const scrollableContainer = document.querySelector('.cardContainer');

scrollableContainer.addEventListener('wheel', (event) => {

  scrollableContainer.scrollLeft -= event.deltaX;

});