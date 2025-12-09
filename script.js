/* Общий фон — плавный сине-фиолетовый градиент */
body {
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    background: linear-gradient(135deg, #1e3cff, #7b3ff5);
    color: #ffffff;
}

/* Шапка */
.header {
    text-align: center;
    padding: 60px 20px;
    color: white;
    animation: fadeDown 1.2s ease;
}

.title {
    font-size: 42px;
    font-weight: 800;
    margin: 0;
    text-shadow: 0 0 15px rgba(255,255,255,0.4);
}

.subtitle {
    font-size: 20px;
    opacity: 0.8;
}

/* Контейнер */
.container {
    width: 90%;
    max-width: 900px;
    margin: auto;
}

/* Карточки */
.card {
    background: white;
    color: #1e3cff;
    padding: 25px;
    border-radius: 18px;
    margin: 20px 0;
    box-shadow: 0 0 25px rgba(0,0,0,0.2);
    position: relative;
    overflow: hidden;
}

.card h2 {
    margin-top: 0;
}

/* Фото команды */
.team-photo {
    width: 100%;
    height: 260px;
    background: black; /* черный квадрат */
    border-radius: 12px;
}

/* Логотип */
.logo-box {
    width: 200px;
    height: 200px;
    border: 3px dashed #1e3cff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #1e3cff;
    font-weight: 700;
    margin-top: 10px;
}

/* Анимации */
.fade {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.8s;
}

.fade.show {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeDown {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
}
