function createStars() {
  const starsContainer = document.querySelector('.stars');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
  }
}

window.addEventListener('load', createStars);
