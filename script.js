const restoData = {
    nama: "Lapo Boreg",
    tagline: "Boru Ni Raja",
    deskripsi: "Restoran makanan khas Batak yang menghadirkan cita rasa autentik Tanah Batak",
    alamat: "Jl. Sisingamangaraja No. 88, Medan, Sumatera Utara",
    telepon: "+62 812-3456-7890",
    email: "info@lapoboreg.id",
    jamBuka: "10.00 - 22.00",
    jamBukaMinggu: "10.00 - 21.00"
};
        // Mobile Menu Toggle
        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('show');
        }

        // Menu Filter
        function filterMenu(category) {
            const cards = document.querySelectorAll('.menu-card');
            const tabs = document.querySelectorAll('.category-tab');

            // Update active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Filter cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }

        // Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu
                    document.getElementById('navMenu').classList.remove('show');
                }
            });
        });

        // Active Nav Link on Scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-menu a');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Add to Cart Animation
        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.addEventListener('click', function() {
                this.textContent = '✓';
                this.style.background = '#27ae60';
                setTimeout(() => {
                    this.textContent = '+';
                    this.style.background = '';
                }, 1500);
            });
        });