# Guide d'importation WordPress - Angèle OM Yoga

## 📋 Fichiers créés

- `angele-yoga-wordpress-export.xml` - Fichier d'export WordPress au format WXR

## 🚀 Instructions d'importation

### 1. Préparer WordPress

1. **Installer WordPress** sur votre serveur
2. **Installer le thème** recommandé :
   - **Astra** (gratuit, léger, compatible Elementor)
   - **GeneratePress** (gratuit, rapide)
   - **Kadence** (gratuit, moderne)

3. **Installer les plugins essentiels** :
   ```
   - Elementor (ou WPBakery Page Builder)
   - Contact Form 7 (pour les formulaires)
   - Custom Post Type UI (si besoin)
   ```

### 2. Importer le contenu

1. **Aller dans WordPress Admin** → Outils → Importer
2. **Cliquer sur "WordPress"** dans la liste des importeurs
3. Si ce n'est pas installé, cliquer sur **"Installer maintenant"**
4. **Cliquer sur "Exécuter l'importeur"**
5. **Choisir le fichier** `angele-yoga-wordpress-export.xml`
6. **Cliquer sur "Téléverser le fichier et l'importer"**
7. **Assigner un auteur** ou créer un nouvel utilisateur
8. **Cocher** "Télécharger et importer les fichiers joints"
9. **Cliquer sur "Envoyer"**

### 3. Configuration post-importation

#### A. Configurer les permaliens
1. Aller dans **Réglages** → **Permaliens**
2. Choisir **"Titre de la publication"**
3. Cliquer sur **"Enregistrer les modifications"**

#### B. Définir la page d'accueil
1. Aller dans **Réglages** → **Lecture**
2. Cocher **"Une page statique"**
3. Dans "Page d'accueil", sélectionner **"Accueil"**
4. Cliquer sur **"Enregistrer les modifications"**

#### C. Créer un menu
1. Aller dans **Apparence** → **Menus**
2. Créer un nouveau menu nommé **"Menu Principal"**
3. Ajouter les pages :
   - Accueil
   - À Propos
   - Activités (lien personnalisé vers #activites)
   - L'Équipe (créer cette page)
   - Planning (créer cette page avec widget Eversports)
   - Cours en ligne (créer cette page)
   - Tarifs (créer cette page)
   - Contact
4. Assigner le menu à **"Menu principal"** ou **"Header Menu"**
5. Enregistrer

### 4. Ajouter le contenu manquant

#### Pages à créer manuellement :

##### Page "L'Équipe"
- Créer une nouvelle page
- Utiliser un constructeur de page (Elementor recommandé)
- Structure en grille avec cartes pour chaque professeur
- Photos : télécharger depuis `/images/` du projet original

##### Page "Planning"
- Intégrer le widget Eversports :
  ```html
  <div data-eversports-widget-id="9d8b2bb9-baa3-4062-b570-d366e1ca2ae5">
      <div style="height: 100%; display: block;"></div>
  </div>
  <script type="module" src="https://widget-static.eversports.io/loader.js" async defer></script>
  ```

##### Page "Cours en ligne"
- Créer avec informations sur les cours Zoom
- Tarifs : 129€ (10 séances) et 39€ (cours particulier)

##### Page "Tarifs"
- Créer avec toutes les grilles tarifaires :
  - Yoga (cartes 6, 10, 20, 40 cours)
  - Pilates
  - Méditation MBSR
  - Shakta Tantra Yoga
  - Cours particuliers

##### Page "Activités"
- Intégrer le widget Instagram Behold :
  ```html
  <behold-widget feed-id="qhVyPYXFtHATTGLhvsZq"></behold-widget>
  <script>
    (() => {
      const d=document,s=d.createElement("script");s.type="module";
      s.src="https://w.behold.so/widget.js";d.head.append(s);
    })();
  </script>
  ```

### 5. Télécharger les images

Télécharger toutes les images du dossier `/images/` dans la médiathèque WordPress :
- Logo : `logo-angele-om-yoga-la-rochelle-1.jpg`
- Icône bol : `bol.png`
- Photos équipe : `angele.jpg`, `mathilde.jpg`, `audrey.jpg`, etc.

### 6. Personnalisation du thème

#### Couleurs principales
Aller dans **Apparence** → **Personnaliser** → **Couleurs** :
```
--terre-douce: #D4A574
--terracotta: #C77B58
--sage: #8B9D83
--cream: #F7F3EE
--charcoal: #3A3A3A
--warm-white: #FEFCF9
--sand: #E8DED0
```

#### Typographie
- **Titres** : Sora (Google Fonts)
- **Texte** : Inter (Google Fonts)

Pour ajouter les polices, installer le plugin **Easy Google Fonts** ou ajouter dans **Apparence** → **Personnaliser** → **CSS additionnel** :
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

### 7. Plugins recommandés supplémentaires

```
✓ Yoast SEO - Optimisation SEO
✓ WP Super Cache - Cache et performance
✓ Smush - Optimisation des images
✓ Wordfence Security - Sécurité
✓ WP Mail SMTP - Configuration email
✓ Instagram Feed by Smash Balloon - Alternative à Behold
```

### 8. Configuration Contact Form 7

1. Aller dans **Contact** → **Formulaires de contact**
2. Modifier le formulaire par défaut ou en créer un nouveau
3. Structure recommandée :
```
<label> Nom & Prénom
    [text* your-name] </label>

<label> Email
    [email* your-email] </label>

<label> Téléphone
    [tel your-phone] </label>

<label> Message
    [textarea* your-message] </label>

[submit "Envoyer"]
```

4. Configurer l'email dans l'onglet **"E-mail"**
5. Copier le shortcode et l'insérer dans la page Contact

### 9. Configuration Google Maps

Pour la carte Google Maps dans la page Contact :
1. Obtenir une **API Key Google Maps** sur https://console.cloud.google.com
2. Installer le plugin **WP Google Maps** ou utiliser un shortcode personnalisé
3. Alternative : Utiliser le bloc Gutenberg "Google Maps" d'Elementor

### 10. Mobile responsive

Les pages importées utilisent du CSS en ligne. Pour améliorer le responsive :
1. Utiliser **Elementor** pour recréer les sections avec son système de colonnes responsive
2. Ou ajouter des media queries dans **Apparence** → **Personnaliser** → **CSS additionnel**

## 📱 Vérifications post-importation

- [ ] Toutes les pages sont publiées
- [ ] Le menu fonctionne correctement
- [ ] Les images s'affichent
- [ ] Le formulaire de contact fonctionne
- [ ] Le widget Eversports est intégré
- [ ] Le widget Instagram est intégré
- [ ] La Google Maps s'affiche
- [ ] Le site est responsive (mobile, tablette)
- [ ] Les couleurs correspondent à la charte graphique
- [ ] Les polices sont chargées correctement

## 🔧 Personnalisation avancée

### Créer un thème enfant (recommandé)

Pour personnaliser sans perdre les modifications lors des mises à jour :
1. Créer un dossier `/wp-content/themes/astra-child/` (si thème Astra)
2. Créer `style.css` :
```css
/*
Theme Name: Astra Child
Template: astra
*/

@import url('../astra/style.css');

/* Vos personnalisations ici */
```
3. Créer `functions.php` :
```php
<?php
function astra_child_enqueue_styles() {
    wp_enqueue_style( 'astra-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'astra-theme-css' ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'astra_child_enqueue_styles' );
```
4. Activer le thème enfant dans **Apparence** → **Thèmes**

## 💡 Conseils

1. **Backup régulier** : Installer UpdraftPlus pour les sauvegardes automatiques
2. **Performance** : Utiliser un CDN comme Cloudflare
3. **Sécurité** : Activer HTTPS, utiliser des mots de passe forts
4. **SEO** : Configurer Yoast SEO avec les mots-clés locaux (yoga La Rochelle, etc.)
5. **Analytics** : Installer Google Analytics via un plugin comme MonsterInsights

## 🆘 Support

Si vous rencontrez des problèmes :
- Documentation WordPress : https://wordpress.org/support/
- Forum Elementor : https://wordpress.org/support/plugin/elementor/
- Support du thème choisi

## 📞 Contact développeur

Pour toute question technique, contacter le développeur du site original.

---

**Note** : Ce fichier d'export contient les pages principales. Les sections dynamiques (équipe, planning, tarifs) doivent être recréées dans WordPress avec un constructeur de page pour une meilleure flexibilité et maintenance.
