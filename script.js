/* ФОН — плавный сине-фиолетовый градиент */
body {
    margin: 0;
    font-family: "Inter", Arial, sans-serif;
    background: linear-gradient(135deg, #1c2be9, #7b2df5);
    color: #ffffff;
}

/* NAVBAR */
.navbar {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(14px);
    position: sticky;
    top: 0;
}

.nav-logo {
    height: 50px;
    margin-right: 15px;
}

.nav-title {
    font-size: 24px;
    font-weight: 600;
}

/* HERO */
.hero {
    text-align: center;
    padding: 80px 20px;
    animation: fadeDown 1.2s ease;
}

.hero h1 {
    font-size: 52px;
    margin: 0;
}

.hero p {
    margin-top: 12px;
    font-size: 20px;
    opacity: 0.9;
}

/* КОНТЕЙНЕР */
.container {
    width: 90%;
    max-width: 900px;
    margin: auto;
}

/* КАРТОЧКИ — неоморфизм */
.card {
    background: rgba(255,255,255,0.13);
    backdrop-filter: blur(20px);
    padding: 32px;
    border-radius: 22px;
    margin: 30px 0;
    box-shadow: 
        10px 10px 25px rgba(0,0,0,0.25),
        inset 2px 2px 8px rgba(255,255,255,0.15);
    color: #e9e9ff;
}

/* ТЕКСТЫ */
.card h2 {
    margin-top: 0;
    color: #ffffff;
}

a {
    color: #b8c7ff;
}

/* Фото команды */
.team-photo {
    width: 100%;
    height: 260px;
    background: black;
    border-radius: 18px;
}

/* ЛОГО */
.logo-img {
    width: 260px;
    border-radius: 14px;
    box-shadow: 0 0 25px rgba(0,0,0,0.5);
    margin-top: 15px;
}

/* Анимации */
.fade {
    opacity: 0;
    transform: translateY(40px);
    transition: 1s ease;
}

.fade.show {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeDown {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
}
