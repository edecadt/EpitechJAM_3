### **Fiche Idées : Application FireAlert**

#### **Objectif du Projet**
Développer une application mobile permettant de signaler rapidement des incendies grâce à la géolocalisation, et de visualiser les incendies signalés sur une carte interactive.

#### **Nom de l'application**:
**FireAlert**

#### **Fonctionnalités principales (MVP)**

1. **Écran d'accueil avec une flamme interactive** :
    - Lors de l'ouverture de l'application, l'utilisateur voit une grande icône de flamme.
    - En cliquant sur cette flamme, l'application demande l'accès à la géolocalisation de l'utilisateur.

2. **Géolocalisation** :
    - Récupération des coordonnées GPS de l'utilisateur après l'accord de l'autorisation de localisation.
    - Affichage des coordonnées sur l'écran pour vérification.

3. **Signalement et envoi de message aux secours** :
    - Un bouton "Envoyer alerte" permet à l'utilisateur de signaler un incendie.
    - Envoi d'un message pré-rempli aux services de secours avec les coordonnées GPS et un message standard signalant un incendie.
    - Affichage d'une confirmation visuelle de l'envoi de l'alerte.

#### **Fonctionnalités supplémentaires (si le temps le permet)**

1. **Carte interactive des incendies déclarés** :
    - Afficher une carte interactive avec tous les incendies signalés par les utilisateurs sous forme de marqueurs.
    - Les marqueurs incluent des détails tels que la date et l'heure de la déclaration.
    - Suppression automatique des incendies après une période déterminée (par exemple, 48 heures).

#### **Technologies**

1. **Front-end** :
    - **Framework** : React Native pour une application mobile cross-platform (iOS et Android).
    - **API de cartographie** : Google Maps API, Mapbox, ou Leaflet pour intégrer une carte interactive.

2. **Back-end** :
    - **API** : Node.js avec Express pour gérer les requêtes d'envoi de messages.
    - **Service de géolocalisation** : Google Maps API pour obtenir les coordonnées GPS.
    - **Service de messagerie** : (On verra car on va pas vrm envoyer de message aux secours mais on peut simuler ça avec un service de messagerie si on trouve un gratuit)
    - **Base de données** : Firebase pour stocker et mettre à jour les informations des incendies en temps réel.

#### **Exemple de Workflow**

1. **Accueil** :
    - L'utilisateur ouvre l'application et voit une grande flamme.
    - L'utilisateur clique sur la flamme.

2. **Géolocalisation** :
    - L'application demande la permission d'accéder à la localisation.
    - Les coordonnées GPS sont récupérées et affichées.

3. **Envoi d'Alerte** :
    - L'utilisateur clique sur "Envoyer alerte".
    - Un message avec les coordonnées GPS et une alerte d'incendie est envoyé aux services de secours.
    - Confirmation visuelle que l'alerte a été envoyée.

4. **Carte interactive (optionnel)** :
    - La carte affiche tous les incendies signalés avec des marqueurs.
    - Les incendies plus anciens que la période définie sont automatiquement supprimés.
