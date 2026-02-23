# Documentation Technique - Site Web Angèle OM Yoga

**Version:** 1.0  

**Date:** 21 février 2026  

**Fichier:** index.html  

**Type:** Page web statique HTML5/CSS3/JavaScript

## 🎯 Vue d'ensemble

Site web one-page moderne pour Angèle OM Yoga, un studio de yoga à La Rochelle. Le site présente les services, l'équipe, les tarifs et permet la réservation de cours via un widget intégré.

### Caractéristiques principales

- ✅ Design moderne et épuré
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Intégration Instagram automatique
- ✅ Système de réservation Eversports
- ✅ Animations CSS fluides
- ✅ Navigation smooth scroll
- ✅ Formulaire de contact

---

## 🏗️ Architecture

### Structure HTML

```
index.html
├── <head>
│   ├── Meta tags (UTF-8, viewport)
│   ├── Title
│   ├── <style> (CSS inline)
│   │   ├── Imports Google Fonts
│   │   ├── Reset CSS
│   │   ├── Variables CSS (:root)
│   │   ├── Styles par composant
│   │   └── Media queries responsive
│   └── Favicon (à ajouter)
│
└── <body>
    ├── <nav> - Navigation fixe
    ├── <section class="hero"> - Section héro
    ├── <section class="instagram-feed"> - Feed Instagram
    ├── <section class="about"> - À propos
    ├── <section class="teachers"> - Équipe
    ├── <section class="booking"> - Planning/Réservation
    ├── <section class="pricing"> - Tarifs
    ├── <section class="contact"> - Contact
    ├── <footer> - Pied de page
    └── <script> - JavaScript inline
        ├── Smooth scroll navigation
        ├── Form submission handler
        ├── Instagram carousel (legacy - peut être retiré)
        └── Behold widget loader
```

---

## 🎨 Palette de couleurs

### Variables CSS (`:root`)

```css
--terre-douce: #D4A574;    /* Beige/Terre claire */
--terracotta: #C77B58;     /* Terracotta (principal) */
--sage: #8B9D83;           /* Vert sauge */
--cream: #F7F3EE;          /* Crème */
--charcoal: #3A3A3A;       /* Gris foncé/Charbon */
--warm-white: #FEFCF9;     /* Blanc chaud (fond) */
--sand: #E8DED0;           /* Sable */
```

### Utilisation des couleurs

| Couleur         | Usage principal                      |
| --------------- | ------------------------------------ |
| `--terracotta`  | Boutons CTA, titres accentués, hover |
| `--charcoal`    | Texte principal, navigation          |
| `--warm-white`  | Fond de page principal               |
| `--cream`       | Fond sections alternées              |
| `--sand`        | Éléments décoratifs, cartes          |
| `--sage`        | Gradients, sections spéciales        |
| `--terre-douce` | Accents secondaires                  |

---

## 📦 Sections du site

### 1. Navigation (`<nav>`)

**ID d'ancrage:** N/A  

**Position:** Fixe en haut  

**Z-index:** 1000

#### Fonctionnalités

- Navigation sticky avec effet blur/transparence
- Logo image (60px hauteur)
- Liens de navigation avec effet underline au hover
- Bouton CTA "Réserver un cours"
- Menu mobile (hamburger) pour < 768px

#### Code clé

```html
<nav>
  <div class="container">
    <a href="#" class="logo">
      <img src="logo-angele-om-yoga-la-rochelle-1.jpg" alt="...">
    </a>
    <ul class="nav-links">
      <li><a href="#accueil">Accueil</a></li>
      <!-- ... -->
    </ul>
    <button class="mobile-menu-btn">☰</button>
  </div>
</nav>
```

**⚠️ Note:** Le menu mobile n'a pas de JavaScript d'ouverture/fermeture - À implémenter

---

### 2. Section Héro (`<section class="hero">`)

**ID d'ancrage:** `#accueil`  

**Layout:** Grid 2 colonnes (1 colonne sur mobile)

#### Éléments

- Titre principal avec animation fadeInUp
- Sous-titre avec animation retardée
- 2 boutons CTA (primaire/secondaire)
- Image de présentation (côté droit)
- Effet de fond animé (cercle flottant)

#### Animations

- `fadeInUp` : Titre, texte, boutons (échelonnées)
- `fadeIn` : Image
- `float` : Cercle décoratif (20s loop)

---

### 3. Section Instagram (`<section class="instagram-feed">`)

**ID d'ancrage:** N/A  

**Widget:** Behold Instagram Feed

#### Configuration

```html
<behold-widget feed-id="qhVyPYXFtHATTGLhvsZq"></behold-widget>
```

#### Script requis

```javascript
<script>
  (() => {
    const d=document,s=d.createElement("script");s.type="module";
    s.src="https://w.behold.so/widget.js";d.head.append(s);
  })();
</script>
```

#### Fonctionnalités

- Affichage automatique des posts Instagram
- Filtre par hashtag: `#angeleomyoga`
- Compte: `@angele_om_yoga`
- Design responsive intégré au widget

**⚠️ Note:** Le carrousel JavaScript legacy (lignes 1230-1323) peut être retiré car remplacé par Behold

---

### 4. Section À propos (`<section class="about">`)

**ID d'ancrage:** `#apropos`  

**Layout:** Centré avec grid de valeurs

#### Structure

- Label de section
- Titre principal
- Texte descriptif
- Grid de 3 cartes de valeurs:
    - Convivialité 👥
    - Approche personnalisée ⭐
    - Passion & Expertise ❤️

#### Effet hover

```css
.value-card:hover {
    transform: translateY(-10px);
}
```

---

### 5. Section Équipe (`<section class="teachers">`)

**ID d'ancrage:** `#equipe`  

**Layout:** Grid responsive (auto-fit, min 320px)

#### Professeurs (6 cartes)

| Nom      | Spécialité         | Tags                                |
| -------- | ------------------ | ----------------------------------- |
| Angèle   | Hatha & Yin Yoga   | Hatha, Yin, Yoga Nidra              |
| Mathilde | Mahashakti Yoga    | Hatha Flow, Équilibres, Ateliers    |
| Audrey   | Vinyasa Yoga       | Vinyasa, Flow, Dynamique            |
| Vanessa  | Méditation MBSR    | Méditation, MBSR, Pleine conscience |
| Aveline  | Pilates            | Pilates, Renforcement, Posture      |
| Océane   | Shakta Tantra Yoga | Tantra, Spirituel, Méditation       |

#### Structure carte

```html
<div class="teacher-card">
  <img src="..." class="teacher-image">
  <div class="teacher-info">
    <h3 class="teacher-name">Nom</h3>
    <p class="teacher-specialty">Spécialité</p>
    <p class="teacher-bio">Bio...</p>
    <div class="teacher-tags">
      <span class="tag">Tag</span>
    </div>
  </div>
</div>
```

#### Effets

- Hover: `translateY(-10px)` + shadow
- Image height: 400px (object-fit: cover)

---

### 6. Section Planning (`<section class="booking">`)

**ID d'ancrage:** `#planning`  

**Widget:** Eversports

#### Configuration widget

```html
<div data-eversports-widget-id="9d8b2bb9-baa3-4062-b570-d366e1ca2ae5">
  <div style="height: 100%; display: block;"></div>
</div>
<script type="module" src="https://widget-static.eversports.io/loader.js" async defer></script>
```

#### Politique d'annulation

- Délai: Jusqu'à **4h avant** le cours
- Annulation via le site Eversports
- Pas de remboursement hors délais

#### Lien externe

https://www.eversports.fr/s/angele-om-yoga

---

### 7. Section Tarifs (`<section class="pricing">`)

**ID d'ancrage:** `#tarifs`  

**Layout:** Grid responsive

#### Tarifs Yoga

| Formule               | Prix | Validité |
| --------------------- | ---- | -------- |
| Cours à l'unité       | 15€  | N/A      |
| Carte 6 cours         | 80€  | 3 mois   |
| **Carte 10 cours** ⭐ | 130€ | 6 mois   |
| Carte 20 cours        | 259€ | 1 an     |
| Carte 40 cours        | 512€ | 1 an     |

#### Carte en vedette

```css
.pricing-card.featured {
    background: var(--terracotta);
    color: white;
    transform: scale(1.05);
}
```

#### Notes

- Cours d'essai: 15€
- Tarif étudiant/demandeur d'emploi: sur demande
- Cartes non remboursables
- Facilités de paiement disponibles

---

### 8. Section Contact (`<section class="contact">`)

**ID d'ancrage:** `#contact`  

**Layout:** Grid 2 colonnes (info + formulaire)

#### Informations

```yaml
Adresse: 
  - 1 bis rue Fleuriau
  - 17000 La Rochelle
  - (au fond de la cour)

Téléphone: 06 08 66 07 00
Email: contact@angele-om-yoga.com
Instagram: @angele_om_yoga
```

#### Formulaire

**Champs:**

- Nom & Prénom (required)
- Email (required)
- Téléphone (optional)
- Message (required, textarea)

**Handler JavaScript:**

```javascript
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    this.reset();
});
```

**⚠️ Note:** Pas d'envoi réel - À intégrer avec backend (PHP, Node.js, ou service type Formspree)

---

### 9. Footer (`<footer>`)

**Layout:** Grid 4 colonnes (responsive)

#### Colonnes

1. **À propos** - Description + réseaux sociaux
2. **Navigation** - Liens internes
3. **Cours** - Types de cours
4. **Informations** - Légal

#### Réseaux sociaux

```html
<div class="social-links">
  <a href="#">📘</a> <!-- Facebook -->
  <a href="#">📸</a> <!-- Instagram -->
  <a href="#">▶️</a> <!-- YouTube -->
</div>
```

**⚠️ Note:** Les liens sont des placeholders (#) - À remplacer par les vrais URLs

---

## 🔧 Widgets externes

### 1. Behold (Instagram)

**Provider:** Behold.so  

**Widget ID:** `qhVyPYXFtHATTGLhvsZq`  

**Script:** `https://w.behold.so/widget.js`

#### Configuration

- Compte: @angele_om_yoga
- Hashtag: #angeleomyoga
- Type: Module ES6
- Chargement: Asynchrone

#### Dashboard

https://behold.so/dashboard (authentification requise)

### 2. Eversports (Réservation)

**Provider:** Eversports  

**Widget ID:** `9d8b2bb9-baa3-4062-b570-d366e1ca2ae5`  

**Script:** `https://widget-static.eversports.io/loader.js`

#### Configuration

- Type: Module
- Chargement: Async + defer
- Lien direct: https://www.eversports.fr/s/angele-om-yoga

#### Dashboard

https://www.eversports.fr/business (authentification requise)

---

## 💻 JavaScript

### 1. Smooth Scroll Navigation

**Fonction:** Navigation fluide entre sections

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
```

### 2. Form Handler

**Fonction:** Gestion soumission formulaire contact

```javascript
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    this.reset();
});
```

**⚠️ À implémenter:**

- Validation des champs
- Envoi réel des données (backend)
- Message de confirmation personnalisé
- Gestion des erreurs

### 3. Instagram Carousel (Legacy)

**Statut:** ⚠️ OBSOLÈTE - Peut être retiré  

**Lignes:** 1230-1323  

**Raison:** Remplacé par widget Behold

Le code créait un carrousel JavaScript avec:

- Navigation par flèches
- Auto-scroll (5s)
- Cartes personnalisées
- Overlay au hover

**Action recommandée:** Supprimer ce code pour nettoyer le fichier

---

## 📱 Design Responsive

### Breakpoints

```css
/* Desktop */
> 1024px : Layout par défaut

/* Tablette */
≤ 1024px : 
- Hero: 1 colonne
- Hero h1: 3.5rem
- Contact: 1 colonne
- Footer: 1 colonne

/* Mobile */
≤ 768px :
- Nav links: cachés
- Mobile menu: visible
- Hero h1: 2.8rem
- Section title: 2.5rem
- Pricing featured: scale(1) normal
```

### Grid Responsive

La plupart des grids utilisent:

```css
grid-template-columns: repeat(auto-fit, minmax(XXXpx, 1fr));
```

Avantages:

- Adaptation automatique
- Pas de media queries nécessaires
- Responsive naturel

---

## 🔗 Dépendances

### Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

**Polices:**

- **Sora** : Titres, headings (300-700)
- **Inter** : Corps de texte, navigation (400-600)

### Widgets externes

| Service    | Fichier   | Type   | Critique |
| ---------- | --------- | ------ | -------- |
| Behold     | widget.js | Module | ✅ Oui   |
| Eversports | loader.js | Module | ✅ Oui   |

### Images

**Toutes hébergées sur:** `https://angele.yoga/wp-content/uploads/`

**Assets locaux:**

- `logo-angele-om-yoga-la-rochelle-1.jpg` (navigation)

---

## ⚙️ Configuration

### Fichiers requis

```
/
├── index.html (ce fichier)
├── logo-angele-om-yoga-la-rochelle-1.jpg
└── DOCUMENTATION_TECHNIQUE.md (ce document)
```

### Variables à configurer

#### Behold Widget

```html
<behold-widget feed-id="qhVyPYXFtHATTGLhvsZq"></behold-widget>
```

#### Eversports Widget

```html
<div data-eversports-widget-id="9d8b2bb9-baa3-4062-b570-d366e1ca2ae5">
```

#### Contact

```javascript
// Dans le formulaire - À remplacer par backend
alert('Merci pour votre message !');
```

---

## 🔧 Maintenance

### Tâches régulières

#### Mensuel

- ✅ Vérifier le fonctionnement des widgets
- ✅ Tester le formulaire de contact
- ✅ Vérifier les liens externes
- ✅ Tester sur différents navigateurs

#### Annuel

- ✅ Mettre à jour les tarifs
- ✅ Actualiser les photos d'équipe
- ✅ Vérifier les informations de contact
- ✅ Renouveler le copyright footer

### Points d'amélioration futurs

#### Fonctionnalités manquantes

1. **Menu mobile fonctionnel**

   ```javascript
   // À implémenter
   document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
       document.querySelector('.nav-links').classList.toggle('active');
   });
   ```
1. **Backend formulaire contact**

   - Options: PHP, Node.js, Formspree, Netlify Forms
   - Validation côté serveur
   - Protection anti-spam (reCAPTCHA)
1. **SEO**

   - Meta description
   - Open Graph tags
   - Structured data (Schema.org)
   - Sitemap.xml
   - robots.txt
1. **Performance**

   - Lazy loading images
   - Minification CSS/JS
   - Compression images
   - CDN pour assets
1. **Analytics**

   - Google Analytics
   - Événements de tracking
   - Heatmaps (Hotjar)
1. **Accessibilité**

   - ARIA labels
   - Focus indicators
   - Screen reader optimization
   - Contraste couleurs WCAG AA

---

## 📊 Métriques & Performance

### Taille fichier

- **index.html:** ~67KB (non minifié)
- **logo-angele-om-yoga-la-rochelle-1.jpg:** À vérifier

### Temps de chargement estimés

| Réseau | Temps |
| ------ | ----- |
| Fibre  | < 1s  |
| 4G     | ~2s   |
| 3G     | ~5s   |

### Optimisations possibles

- Minifier HTML/CSS/JS : -30% taille
- Compresser images : -50-70% taille
- Lazy load : +50% vitesse perçue

---

## 🐛 Bugs connus

1. **Menu mobile non fonctionnel**

   - Status: ⚠️ À implémenter
   - Priorité: Haute
   - Workaround: N/A
1. **Formulaire contact sans backend**

   - Status: ⚠️ Fonctionne mais n'envoie pas
   - Priorité: Haute
   - Workaround: Alert JS temporaire
1. **Code carrousel Instagram legacy**

   - Status: ⚠️ Code mort (non utilisé)
   - Priorité: Basse
   - Action: Peut être supprimé

---

## 📝 Changelog

### Version 1.0 (21 février 2026)

- ✅ Structure HTML5 complète
- ✅ Design responsive
- ✅ Intégration Behold Instagram
- ✅ Intégration Eversports
- ✅ Section équipe (6 professeurs)
- ✅ Section tarifs
- ✅ Formulaire contact (frontend only)
- ✅ Navigation smooth scroll
- ✅ Animations CSS
- ✅ Footer complet

---

## 🔐 Sécurité

### Considérations

- ✅ Pas de données sensibles en dur
- ✅ Widgets externes via HTTPS
- ⚠️ Formulaire : Validation côté client uniquement
- ⚠️ Pas de protection CSRF (pas de backend)

### Recommandations futures

- Implémenter reCAPTCHA sur formulaire
- Ajouter Content Security Policy (CSP)
- Configurer CORS si backend API

---

## 📞 Support

### Widgets

- **Behold:** https://behold.so/support
- **Eversports:** https://www.eversports.com/help

### Développement

- HTML5: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS3: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## 📜 Licence

© 2024 Angèle OM Yoga - Tous droits réservés

---

**Dernière mise à jour:** 21 février 2026  

**Version document:** 1.0  

**Auteur:** Documentation générée automatiquement