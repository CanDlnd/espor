// Login işlemi
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Token'ı ve kullanıcı bilgilerini localStorage'a kaydet
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userName', data.username);
            localStorage.setItem('userRole', data.role);
            
            // Başarılı giriş mesajı
            alert('Giriş başarılı!');
            
            // Başarılı giriş sonrası ana sayfaya yönlendir
            window.location.href = '/index.html';
        } else {
            showError(data.message || 'Giriş başarısız!');
        }
    } catch (error) {
        console.error('Giriş hatası:', error);
        alert('Giriş sırasında bir hata oluştu!');
    }
}

// Kayıt işlemi
async function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Şifre kontrolleri
    if (password.length < 6) {
        showError('Şifre en az 6 karakter olmalıdır');
        return;
    }

    if (password !== confirmPassword) {
        showError('Şifreler eşleşmiyor');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Token'ı ve kullanıcı bilgilerini localStorage'a kaydet
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userName', data.username);
            localStorage.setItem('userRole', 'user'); // Yeni kayıt olan kullanıcılar her zaman normal kullanıcı olur
            
            // Başarılı kayıt mesajı
            alert('Kayıt başarılı!');
            
            // Ana sayfaya yönlendir
            window.location.href = '/index.html';
        } else {
            showError(data.message || 'Kayıt başarısız!');
        }
    } catch (error) {
        console.error('Kayıt hatası:', error);
        alert('Kayıt sırasında bir hata oluştu!');
    }
}

// Sayfa yüklendiğinde form event listener'larını ekle
// Tab değiştirme fonksiyonu
function switchTab(tabName) {
    // Tüm formları gizle
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });

    // Tüm tab butonlarının active sınıfını kaldır
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Seçilen formu göster
    document.getElementById(`${tabName}-section`).classList.add('active');
    
    // Seçilen tab butonunu aktif yap
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// Hata mesajını göster
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background-color: #ff4444;
        color: white;
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        text-align: center;
    `;

    // Varsa eski hata mesajını kaldır
    const oldError = document.querySelector('.error-message');
    if (oldError) {
        oldError.remove();
    }

    // Aktif forma hata mesajını ekle
    const activeForm = document.querySelector('.auth-form.active form');
    if (activeForm) {
        activeForm.insertBefore(errorDiv, activeForm.firstChild);
    }

    // 5 saniye sonra hata mesajını kaldır
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Tab butonlarına tıklama olay dinleyicileri ekle
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Şifre göster/gizle butonlarına tıklama olay dinleyicileri ekle
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const passwordInput = icon.parentElement.querySelector('input[type="password"], input[type="text"]');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});
