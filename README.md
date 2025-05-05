# 🧪 Landing Page Generator com Astro.js + TinaCMS

Este projeto foi desenvolvido como parte de um teste técnico para a A3 Media. Ele consiste na criação de duas landing pages replicadas fielmente a partir de exemplos reais, utilizando o framework **Astro.js** e o CMS baseado em arquivos locais **TinaCMS**, com geração automática de 1000 variações por template via **faker.js**.

## 🌐 Deploy Online

Acesse o projeto publicado na Vercel:  
👉 https://landing-generator-psi.vercel.app/

---

## 🚀 Tecnologias Utilizadas

- [Astro.js](https://astro.build/)
- [TinaCMS](https://tina.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Faker.js](https://fakerjs.dev/)
- Markdown como base de conteúdo
- Node.js para scripts de geração

---

## 📁 Estrutura do Projeto

```
content/
  ├── template1/     # Páginas do Template 1 (1000 arquivos .md)
  └── template2/     # Páginas do Template 2 (1000 arquivos .md)
src/
  ├── layouts/
  │   ├── Template1Layout.astro
  │   └── Template2Layout.astro
  ├── pages/
  │   ├── template1/[slug].astro
  │   └── template2/[slug].astro
  └── tina/
      ├── client.ts
      └── types.ts
.tina/
  └── config.ts       # Schema do CMS
```

---

## 📦 Instalação do Projeto

```bash
# Clone o projeto
git clone https://github.com/jonathantx/landing-generator

# Acesse a pasta
cd landing-generator

# Instale as dependências
npm install

# Gere os arquivos do TinaCMS
npm run tina

# Rode o projeto localmente
npm run dev
```

---

## 📄 Conteúdo com TinaCMS

As páginas são gerenciadas via TinaCMS (arquivos `.md` salvos localmente em `/content/`).

### Template 1 (rota: `/template1/[slug]`)

Campos:
- `title`
- `videoUrl`
- `buttonContent`
- `description`
- `footerText`
- `footerLinks` (array de texto + URL)

### Template 2 (rota: `/template2/[slug]`)

Campos:
- `headline`
- `imageUrl`
- `refsImage`
- `scientificRefs` (array de 20+ referências científicas)
- `footerText`
- `linksRodape` (array de texto + URL)

---

## 🛠 Scripts de Geração (faker.js)

### Gerar 1000 arquivos do Template 1

```bash
node generete-markdown-template1.js
```

### Gerar 1000 arquivos do Template 2

```bash
node generete-markdown-template2.js
```

Os arquivos serão salvos nas respectivas pastas em `/content/`.

---

## 📌 Observações

- As imagens são carregadas dinamicamente via serviços públicos como [picsum.photos](https://picsum.photos) e [placehold.co](https://placehold.co).
- O TinaCMS funciona 100% localmente, sem back-end externo.
- As páginas são renderizadas estaticamente via `getStaticPaths()` e `Astro.params`.

---

## 🧑‍💻 Desenvolvedor

**Jonathan Teixeira**  
Desenvolvedor Web Fullstack  

