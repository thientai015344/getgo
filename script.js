document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    const container = document.querySelector('.container');

    // Handle No button click
    noButton.addEventListener('click', (e) => {
        // Get container boundaries
        const containerRect = container.getBoundingClientRect();
        
        noButton.style.position = 'absolute';
        // Calculate random position within container
        const maxX = containerRect.width - noButton.offsetWidth;
        const maxY = containerRect.height - noButton.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        // Apply new position
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Handle Yes button click
    yesButton.addEventListener('click', () => {
        window.location.href = 'yes.html';
    });
});
