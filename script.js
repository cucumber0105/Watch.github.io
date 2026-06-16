let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalDiv = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        cartTotalDiv.innerHTML = 'Итого: 0 ₽';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽ x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-index="${index}">×</button>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = html;
    cartTotalDiv.innerHTML = `Итого: ${total.toLocaleString()} ₽`;

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
        });
    });
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    saveCart();
    alert(`${name} добавлен в корзину!`);
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = btn.closest('.product-card');
        const name = card.dataset.name;
        const price = parseInt(card.dataset.price);
        addToCart(name, price);
    });
});

const mainAddToCartBtn = document.getElementById('mainAddToCart');
if (mainAddToCartBtn) {
    mainAddToCartBtn.addEventListener('click', () => {
        addToCart('ВОСТОК АМФИБИЯ 2403', 9800);
    });
}

const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeCart = document.getElementById('closeCart');

function openCart() {
    renderCart();
    cartModal.classList.add('active');
    modalOverlay.classList.add('active');
}

function closeCartModal() {
    cartModal.classList.remove('active');
    modalOverlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartModal);
modalOverlay.addEventListener('click', closeCartModal);

updateCartCount();

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.getElementById('searchInput');
const catalogGrid = document.getElementById('catalogGrid');
const allProducts = Array.from(document.querySelectorAll('.product-card'));

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});

function filterProducts() {
    const query = searchInput.value.toLowerCase().trim();
    
    allProducts.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        if (query === '' || title.includes(query)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterProducts);

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        }
    });
});

// Карта (заглушка — инициализируется только если API загрузился)
if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap);
}

function initMap() {
    var myMap = new ymaps.Map("map", {
        center: [55.052, 60.107],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });

    var myPlacemark = new ymaps.Placemark([55.052, 60.107], {
        hintContent: 'TIMELESS FASHION',
        balloonContent: '<strong>Магазин часов</strong><br>просп. Автозаводцев, 50<br>г. Миасс, 456300<br>+7 (908) 709-48-25'
    }, {
        preset: 'islands#redIcon',
        iconColor: '#000000'
    });

    myMap.geoObjects.add(myPlacemark);
}

const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.querySelector('.close-modal');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

loginBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    clearErrors();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        clearErrors();
    }
});

showRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    clearErrors();
});

showLogin.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    clearErrors();
});

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.success-message').forEach(el => el.style.display = 'none');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById('submitRegister').addEventListener('click', () => {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    let isValid = true;

    if (!name) {
        document.getElementById('regNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('regNameError').style.display = 'none';
    }

    if (!validateEmail(email)) {
        document.getElementById('regEmailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('regEmailError').style.display = 'none';
    }

    if (password.length < 4) {
        document.getElementById('regPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('regPasswordError').style.display = 'none';
    }

    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
            document.getElementById('registerSuccess').style.display = 'block';
            document.getElementById('registerSuccess').textContent = 'Пользователь с таким email уже существует!';
            document.getElementById('registerSuccess').style.color = '#e74c3c';
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('registerSuccess').style.display = 'block';
            document.getElementById('registerSuccess').textContent = 'Регистрация успешна! Теперь войдите.';
            document.getElementById('registerSuccess').style.color = '#27ae60';
            
            setTimeout(() => {
                registerForm.style.display = 'none';
                loginForm.style.display = 'block';
                clearErrors();
                document.getElementById('loginEmail').value = email;
            }, 1500);
        }
    }
});

document.getElementById('submitLogin').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    if (!validateEmail(email)) {
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('loginEmailError').style.display = 'none';
    }

    if (password.length < 4) {
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('loginPasswordError').style.display = 'none';
    }

    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            document.getElementById('loginSuccess').style.display = 'block';
            document.getElementById('loginSuccess').textContent = `Добро пожаловать, ${user.name}!`;
            document.getElementById('loginSuccess').style.color = '#27ae60';
            
            setTimeout(() => {
                modal.classList.remove('active');
                loginBtn.textContent = user.name;
                loginBtn.style.fontSize = '14px';
                loginBtn.style.maxWidth = '120px';
                loginBtn.style.overflow = 'hidden';
                loginBtn.style.textOverflow = 'ellipsis';
                clearErrors();
            }, 1000);
        } else {
            document.getElementById('loginSuccess').style.display = 'block';
            document.getElementById('loginSuccess').textContent = 'Неверный email или пароль!';
            document.getElementById('loginSuccess').style.color = '#e74c3c';
        }
    }
});

const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    const user = JSON.parse(currentUser);
    loginBtn.textContent = user.name;
    loginBtn.style.fontSize = '14px';
    loginBtn.style.maxWidth = '120px';
    loginBtn.style.overflow = 'hidden';
    loginBtn.style.textOverflow = 'ellipsis';
}