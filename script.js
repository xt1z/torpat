document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

