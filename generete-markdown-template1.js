import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

const outputDir = "./content/template1"; 

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const generateFooterLinks = () => {
  const linkTexts = ["Shipping", "Contact", "Privacy Policy", "Terms of Service"];
  return linkTexts.map((text) => ({
    text,
    url: "#",
  }));
};

const generatePublicImage = () => {
  const width = faker.number.int({ min: 600, max: 800 });
  const height = faker.number.int({ min: 300, max: 500 });
  return `https://picsum.photos/${width}/${height}?random=${faker.number.int(10000)}`;
};

for (let i = 2; i <= 1000; i++) {
  const title = faker.company.catchPhrase();
  const videoUrl = generatePublicImage();
  const buttonContent = faker.helpers.arrayElement([
    "Watch the free video",
    "Click here to start",
    "See how it works",
    "Try it now",
    "Instant access",
    "Learn the secret"
  ]);
  const description = faker.lorem.paragraphs(3, "\n\n");
  const footerText = faker.lorem.paragraphs(2, "\n\n");
  const footerLinks = generateFooterLinks();

  
  const content = `---
title: ${title}
videoUrl: '${videoUrl}'
buttonContent: ${buttonContent}
description: >
  ${description.split("\n").join("\n  ")}
footerText: >
  ${footerText.split("\n").join("\n  ")}
footerLinks:
${footerLinks.map(link => `  - text: ${link.text}\n    url: '${link.url}'`).join('\n')}
---`;

  const filename = path.join(outputDir, `${i}.md`);
  fs.writeFileSync(filename, content);
}

console.log("✅ 1000 arquivos .md gerados com sucesso.");
