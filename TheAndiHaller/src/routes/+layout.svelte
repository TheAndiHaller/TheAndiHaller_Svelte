<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import { browser } from '$app/environment';
  
    type Language = 'en' | 'es';
  
    const translations = {
      en: {
        home: 'Home',
        projects: 'Projects',
        blog: 'Blog',
        about: 'About Me'
      },
      es: {
        home: 'Inicio',
        projects: 'Proyectos',
        blog: 'Blog',
        about: 'Sobre Mí'
      }
    };
  
    // Initialize selectedLanguage, default to 'en'
    let selectedLanguage: Language = 'en';
  
    if (browser) {
      // This code only runs in the browser
      selectedLanguage = (localStorage.getItem('lang') as Language) || 'en';
    }
  
    function setLanguage(lang: Language): void {
      selectedLanguage = lang;
      if (browser) {
        localStorage.setItem('lang', lang);
      }
    }
  
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  

<div>
    <button class="lang-buttons" on:click={() => setLanguage("en")}>En</button>
    <button class="lang-buttons" on:click={() => setLanguage("es")}>Es</button>
</div>

<nav>
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle Menu">
        &#9776; Menu
    </button>
    <ul class={isMenuOpen ? "show" : ""}>
        <li><a class="navbar-link-text" href="/">{translations[selectedLanguage].home}</a></li>
        <li><a class="navbar-link-text" href="/projects">{translations[selectedLanguage].projects}</a></li>
        <li><a class="navbar-link-text" href="/blog">{translations[selectedLanguage].blog}</a></li>
        <li><a class="navbar-link-text" href="/about">{translations[selectedLanguage].about}</a></li>
    </ul>
</nav>

<slot />

<style>
    nav {
        background-color: #11161e;
        padding: 10px;
        color: #eaebeb;
    }
    nav ul {
        list-style: none;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    nav ul li {
        display: inline;
    }
    nav ul li a {
        color: #eaebeb;
        text-decoration: none;
        font-weight: bold;
    }
    .menu-toggle {
        display: none;
        cursor: pointer;
    }

    .navbar-link-text:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #e6c738;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    .navbar-link-text:hover:after {
        visibility: visible;
        transform: scaleX(1);
    }

    .lang-buttons {
        display: block;
        background: none;
        border: none;
        color: #eaebeb;
        text-decoration: none;
        font-weight: bold;
        font-family: "IBM Plex Mono", monospace;
        font-size: 18px;
    }
    @media (max-width: 600px) {
        nav ul {
            flex-direction: column;
            display: none;
        }
        nav ul.show {
            display: flex;
        }
        .menu-toggle {
            display: block;
            background: none;
            border: none;
            color: #eaebeb;
            text-decoration: none;
            font-weight: bold;
            font-family: "IBM Plex Mono", monospace;
            font-size: 18px;
        }
    }
</style>
