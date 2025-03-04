import projects from "./data/project";

export default function sitemap() {
  return [
    {
      url: "https://www.domiweb.pl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.domiweb.pl/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Iterowanie po projektach
    ...projects.map((project) => ({
      url: `https://www.domiweb.pl/portfolio/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    {
      url: "https://www.domiweb.pl/kontakt",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.domiweb.pl/o-nas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.domiweb.pl/pozycjonowanie",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.domiweb.pl/cennik",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
