const images = [
  'menu1.jpg',
  'menu2.jpg',
  'menu3.jpg',
  'menu4.jpg'
];

let currentPage = 0;
const book = document.getElementById('book');

function updatePage() {
  book.innerHTML = `<img src="${images[currentPage]}" alt="Menu Page ${currentPage + 1}">`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < images.length - 1) {
    currentPage++;
    updatePage();
  }
});

// Initial load
updatePage();
