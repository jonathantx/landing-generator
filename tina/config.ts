import { defineConfig } from "tinacms";

// Detecta o branch automaticamente para Git
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "template1",
        label: "Template 1 Pages",
        path: "content/template1",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "videoUrl",
            label: "URL do Vídeo (embed)",
          },
          {
            type: "string",
            name: "buttonContent",
            label: "Texto do Botão",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "footerText",
            label: "Texto do Rodapé",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "footerLinks",
            label: "Links do Rodapé",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Texto do Link" },
              { type: "string", name: "url", label: "URL do Link" }
            ]
          },
        ],
      },
      {
        name: "template2",
        label: "Template 2 Pages",
        path: "content/template2",
        format: "md",
        fields: [
          {
            type: "string",
            name: "headline",
            label: "Título Principal",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "imageUrl",
            label: "Imagem Principal (URL)",
          },
          {
            type: "string",
            name: "refsImage",
            label: "Imagem de Referências (URL)",
          },
          {
            type: "object",
            name: "scientificRefs",
            label: "Referências Científicas",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título da Referência"
              }
            ]
          },
          {
            type: "rich-text",
            name: "footerText",
            label: "Texto Legal do Rodapé",
            isBody: false,
          },
          {
            type: "object",
            name: "linksRodape",
            label: "Links do Rodapé",
            list: true,
            fields: [
              {
                type: "string",
                name: "textLink",
                label: "texto do Link"
              },
              {
                type: "string",
                name: "urlLink",
                label: "URL do Link"
              }
            ]
          },
   
        ]
      }
      
    ],
  },
});
