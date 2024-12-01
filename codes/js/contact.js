document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValueInput = document.getElementById('ratingValue');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');

            stars.forEach(s => s.classList.remove('selected'));

            star.classList.add('selected');
            let previousStar = star.previousElementSibling;
            while (previousStar) {
                previousStar.classList.add('selected');
                previousStar = previousStar.previousElementSibling;
            }

            ratingValueInput.value = ratingValue;
        });
    });
});