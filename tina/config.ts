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
      },
      {
        name: "template3",
        label: "Portfolio Template",
        path: "content/template3",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nome",
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
            name: "profissao",
            label: "Profissão",
          },
          {
            type: "string",
            name: "telefone",
            label: "Telefone",
          },
          {
            type: "string",
            name: "email",
            label: "E-mail",
          },
          {
            type: "string",
            name: "localidade",
            label: "Localidade (São Paulo, Brasil)",
          },
          {
            type: "string",
            name: "dataNascimento",
            label: "Data de Nascimento (03 de Março, 1999)",
          },
          {
            type: "rich-text",
            name: "sobreMim",
            label: "Sobre Mim",
          },
          {
            type: "object",
            name: "educacao",
            label: "Educação",
            list: true,
            fields: [
              {
                type: "string",
                name: "periodo",
                label: "Periodo (2018-2022)"
              },
              {
                type: "string",
                name: "curso",
                label: "Curso"
              },
              {
                type: "string",
                name: "instituicao",
                label: "Instituição"
              }
            ]
          },
          {
            type: "object",
            name: "experiencia",
            label: "Experiência Profissional",
            list: true,
            fields: [
              {
                type: "string",
                name: "periodo",
                label: "Periodo (2018-2022)"
              },
              {
                type: "string",
                name: "funcao",
                label: "Função"
              },
              {
                type: "string",
                name: "empresa",
                label: "Empresa"
              }
            ]
          },
        ]
      }
      
    ],
  },
});
