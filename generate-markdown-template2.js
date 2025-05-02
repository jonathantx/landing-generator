import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

const outputDir = "./content/template2";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const refsImageUrl = "https://placehold.co/1024x195?text=References";

const generateImageUrl = () => {
  const width = faker.number.int({ min: 700, max: 900 });
  const height = faker.number.int({ min: 400, max: 600 });
  return `https://picsum.photos/${width}/${height}?random=${faker.number.int(10000)}`;
};

const generateScientificRefs = () => {
  const refs = [];
  for (let i = 0; i < faker.number.int({ min: 20, max: 35 }); i++) {
    refs.push({ title: faker.lorem.sentence() });
  }
  return refs;
};

const generateFooterLinks = () => {
  const linkTexts = [
    "Privacy",
    "Terms and Conditions",
    "Disclaimer",
    "References",
    "Returns",
    "Refunds",
    "Contact",
    "Shipping Policy"
  ];
  return linkTexts.map((text) => ({
    textLink: text,
    urlLink: "#",
  }));
};

for (let i = 2; i <= 1000; i++) {
  const headline = faker.lorem.sentence(12);
  const imageUrl = generateImageUrl();
  const footerText = faker.lorem.paragraphs(3, "\n\n");
  const scientificRefs = generateScientificRefs();
  const footerLinks = generateFooterLinks();

  const content = `---
headline: >-
  ${headline}
imageUrl: >-
  ${imageUrl}
refsImage: '${refsImageUrl}'
scientificRefs:
${scientificRefs.map(ref => `  - title: ${ref.title}`).join("\n")}
footerText: >
${footerText.split("\n").map(line => "  " + line).join("\n")}
linksRodape:
${footerLinks.map(link => `  - textLink: ${link.textLink}\n    urlLink: '${link.urlLink}'`).join('\n')}
---`;

  const filename = path.join(outputDir, `${i}.md`);
  fs.writeFileSync(filename, content);
}

console.log("✅ 1000 arquivos .md gerados com sucesso para Template 2.");
