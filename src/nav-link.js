function linkNav(){
    document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-link[href="#${id}"]`).classList.remove('active');
            }
        });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
}

export default linkNav