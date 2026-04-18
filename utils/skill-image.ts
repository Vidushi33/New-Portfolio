import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import githubActions from "../app/assets/svg/skills/GitHub Actions.svg";
import tailwindcss from "../app/assets/svg/skills/Tailwind CSS.svg";
import expressjs from "../app/assets/svg/skills/Express.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import postman from "../app/assets/svg/skills/Postman.svg";
import nestjs from "../app/assets/svg/skills/Nest.js.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";
import nodejs from "../app/assets/svg/skills/nodejs.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import react from "../app/assets/svg/skills/react.svg";
import html from "../app/assets/svg/skills/html.svg";
import css from "../app/assets/svg/skills/css.svg";
import gcp from "../app/assets/svg/skills/gcp.svg";
import git from "../app/assets/svg/skills/git.svg";

// Define type for skill images
type SkillImageType = typeof gcp; // Using gcp as a representative type for SVG imports

export const skillsImage = (skill: string): SkillImageType | undefined => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    // case "gcp":
    //   return gcp;
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "nextjs":
      return nextJS;
    case "expressjs":
      return expressjs;
    case "reactjs":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "vitejs":
      return vitejs;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "figma":
      return figma;
    case "nodejs":
      return nodejs;
    case "postman":
      return postman;
    case "nestjs":
      return nestjs;
    case "github actions":
      return githubActions;
    case "tailwind css":
      return tailwindcss;
    default:
      return javascript;
  }
};
