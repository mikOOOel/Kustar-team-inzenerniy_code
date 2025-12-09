:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --accent-color: #60a5fa;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --white: #ffffff;
    --background: #f8fafc;
    --card-bg: #ffffff;
    --gradient: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --hover-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    height: 80px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary-color);
}

#nav-logo {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    object-fit: cover;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    font-weight: 500;
    color: var(--text-color);
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background: var(--white);
    overflow: hidden;
    padding-top: 80px;
}

.hero-shape {
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: var(--gradient);
    border-radius: 50%;
    opacity: 0.1;
    filter: blur(80px);
    z-index: 0;
}

.hero-content {
    z-index: 1;
    max-width: 800px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.highlight {
    color: var(--primary-color);
    background: linear-gradient(120deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 88%;
}

.hero p {
    font-size: 1.25rem;
    color: var(--light-text);
    margin-bottom: 40px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--gradient);
    color: var(--white);
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

/* Sections */
.section {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 60px;
    color: var(--text-color);
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 15px auto 0;
    border-radius: 2px;
}

/* Cards */
.card {
    background: var(--card-bg);
    border-radius: 16px;
    padding: 30px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.05);
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: var(--hover-shadow);
}

/* Team */
.team-leader {
    max-width: 600px;
    margin: 0 auto 60px;
    text-align: center;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.member-card {
    text-align: center;
    padding: 40px 20px;
}

.member-photo {
    width: 100px;
    height: 100px;
    background-color: #111; /* Black square placeholder */
    margin: 0 auto 20px;
    border-radius: 12px;
}

.role {
    color: var(--primary-color);
    font-weight: 500;
    margin-top: 5px;
}

.name {
    font-size: 1.2rem;
    font-weight: 700;
}

/* Logo Section */
.logo-section {
    background: #f1f5f9;
    text-align: center;
}

.big-logo {
    max-width: 300px;
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.big-logo:hover {
    transform: scale(1.05);
}

/* Organization */
.org-card {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.full-name {
    margin: 15px 0;
    font-style: italic;
    color: var(--light-text);
}

.org-details p {
    margin: 10px 0;
}

.org-details a {
    color: var(--primary-color);
    text-decoration: underline;
}

/* Footer */
footer {
    background: #0f172a;
    color: var(--white);
    padding: 40px 0;
    text-align: center;
}

/* Animations */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s forwards;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .nav-links {
        display: none; /* Mobile menu hidden for simplicity */
    }
}
