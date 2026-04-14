export const PROJECT_CATEGORIES = {
  ONSITE: "onsite",
  FRONTEND: "frontend",
  BACKEND: "backend",
  INPROGRESS: "inprogress",
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];

export const getCategoryDisplay = (category: ProjectCategory): string => {
  const displayMap: Record<ProjectCategory, string> = {
    [PROJECT_CATEGORIES.ONSITE]: "On-Site",
    [PROJECT_CATEGORIES.FRONTEND]: "Frontend",
    [PROJECT_CATEGORIES.BACKEND]: "Backend",
    [PROJECT_CATEGORIES.INPROGRESS]: "In-Progress",
  };

  return displayMap[category] || category;
};

export const CATEGORY_OPTIONS: ProjectCategory[] = [
  PROJECT_CATEGORIES.ONSITE,
  PROJECT_CATEGORIES.FRONTEND,
  PROJECT_CATEGORIES.BACKEND,
  PROJECT_CATEGORIES.INPROGRESS,
];

/**
 * Category descriptions for metadata/SEO
 */
export const CATEGORY_DESCRIPTIONS: Record<ProjectCategory, string> = {
  [PROJECT_CATEGORIES.ONSITE]: "Professional on-site projects and client work",
  [PROJECT_CATEGORIES.FRONTEND]: "Frontend applications and UI components",
  [PROJECT_CATEGORIES.BACKEND]: "Backend services and APIs",
  [PROJECT_CATEGORIES.INPROGRESS]: "Building in progress...",
};
