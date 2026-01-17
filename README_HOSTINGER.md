# VASPRATO Business (Node.js) — Deploy en Hostinger

Este proyecto es una web corporativa/SEO para proveedores en **business.vasprato.com**.

## 1) DNS (muy importante)
En **Hostinger → Dominios → DNS/Nameservers** deja:

- `CNAME` **business** → `connect.hostinger.com`

Y evita tener a la vez un `A` para `business` (no mezclar).

## 2) Crear la App Node.js
En Hostinger:

1. **Websites → Añadir sitio web**
2. Elige **App web de Node.js**
3. Dominio: **business.vasprato.com**
4. Startup file: **index.js**
5. Comando de inicio: `npm start`

## 3) Subir archivos
Sube todo el contenido de esta carpeta (incluyendo `package.json`, `index.js` y `public/`).

Opciones:
- **GitHub Deploy** (ideal)
- **File Manager / FTP** (subir archivos a la carpeta del proyecto)

## 4) Instalar dependencias
En el panel Node.js:
- Ejecuta `npm install`
- Reinicia / Start App

## 5) SSL
Cuando el sitio ya cargue por HTTP, activa el candado:
- **Security → SSL → Let’s Encrypt** para `business.vasprato.com`

## 6) Cambiar textos
Edita:
- `public/index.html`
- `public/styles.css`

Logos:
- `public/assets/logo.jpg`
- `public/assets/icon.png`
