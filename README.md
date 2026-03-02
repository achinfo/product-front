# Product Front - Frontend JS pour API REST

## 🚀 Description

Ce projet est un **frontend simple en JavaScript** qui consomme une **API REST** pour gérer des produits.  
Il permet de :

- Récupérer les produits depuis l’API (`GET /products`)  
- Les afficher dynamiquement dans une liste  
- Ajouter un nouveau produit (`POST /products`)  
- Supprimer un produit (optionnel)  

Le projet est conçu pour être **léger et pédagogique**, parfait pour enrichir un portfolio ou un GitHub.

---

## 🛠 Stack technique

- **Frontend :** HTML, CSS, JavaScript (Vanilla JS)  
- **Backend :** API Node.js / Express + MySQL (dans un autre repo)  
- **Outils :** Live Server, Git, GitHub  

---

## 📂 Structure du projet
product-front/
│
├─ index.html # Page principale
├─ css/
│ └─ style.css # Styles du front
├─ js/
│ └─ main.js # Logique JavaScript (fetch, affichage, POST)
└─ README.md

---

## ⚡ Fonctionnalités

1. **Récupération des produits** : affichage dynamique depuis l’API  
2. **Ajout d’un produit** via formulaire  
3. **Suppression d’un produit** (bouton "Supprimer")  
4. **CORS activé** pour communiquer avec l’API sur un autre port  

---

## 💻 Installation / Utilisation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/TonUtilisateur/product-front.git
cd product-front