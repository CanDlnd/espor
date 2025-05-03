// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    const navLinksList = document.querySelectorAll('.nav-links a');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const reminderBtns = document.querySelectorAll('.reminder-btn');
    const passwordToggles = document.querySelectorAll('.toggle-password');
    const authTabs = document.querySelectorAll('.auth-tab');

    // Active link highlighting
    navLinks.forEach(link => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const linkPath = link.getAttribute('href');
        
        if (currentPath === linkPath) {
            link.classList.add('active');
            // Eğer bu bir login-btn ise, active class'ını ekle
            if (link.classList.contains('login-btn')) {
                link.classList.add('active');
            }
        }
    });

    // Tournament/Stream filtering
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const gameType = button.dataset.game;
                const items = document.querySelectorAll('.tournament-card, .stream-card');

                items.forEach(item => {
                    const gameTag = item.querySelector('.game-tag');
                    if (gameType === 'all') {
                        item.style.display = '';
                    } else if (gameTag && gameTag.textContent.toLowerCase() === gameType.toLowerCase()) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulating loading more content
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yükleniyor...';
            setTimeout(() => {
                loadMoreBtn.innerHTML = 'Daha Fazla <i class="fas fa-chevron-down"></i>';
                // Add new content here when connected to backend
            }, 1500);
        });
    }

    // Reminder button functionality
    if (reminderBtns.length > 0) {
        reminderBtns.forEach(button => {
            button.addEventListener('click', () => {
                // Kullanıcı giriş kontrolü
                const isLoggedIn = false; // Bu değer backend'den gelecek
                
                if (!isLoggedIn) {
                    alert('Bu özelliği kullanmak için giriş yapmalısınız!');
                    window.location.href = 'login.html';
                    return;
                }
                
                button.classList.toggle('active');
                const icon = button.querySelector('i');
                if (button.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    button.innerHTML = '<i class="fas fa-bell"></i> Hatırlatılacak';
                    // Hatırlatıcıyı backend'e kaydet
                    alert('Hatırlatıcı ayarlandı!');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    button.innerHTML = '<i class="far fa-bell"></i> Hatırlat';
                    // Hatırlatıcıyı backend'den kaldır
                    alert('Hatırlatıcı kaldırıldı!');
                }
            });
        });
    }

    // Password visibility toggle
    if (passwordToggles) {
        passwordToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const input = toggle.previousElementSibling;
                if (input.type === 'password') {
                    input.type = 'text';
                    toggle.classList.remove('fa-eye-slash');
                    toggle.classList.add('fa-eye');
                } else {
                    input.type = 'password';
                    toggle.classList.remove('fa-eye');
                    toggle.classList.add('fa-eye-slash');
                }
            });
        });
    }

    // Auth tabs functionality
    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and forms
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

                // Add active class to clicked tab and corresponding form
                tab.classList.add('active');
                const formId = `${tab.dataset.tab}-form`;
                const form = document.getElementById(formId);
                if (form) {
                    form.classList.add('active');
                }
            });
        });
    }

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // Show success message
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';

                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Başarılı!';
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        form.reset();
                    }, 2000);
                }, 1500);
            }
        });
    });
});
