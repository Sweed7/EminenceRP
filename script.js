let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function showPage(page) {
    pages.forEach((p, index) => {
        p.classList.toggle('active', index === page - 1);
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Initial page load
showPage(currentPage);
