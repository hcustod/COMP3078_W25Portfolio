/** @jsxImportSource preact */
import { useMemo, useState } from 'preact/hooks';

export interface ExplorerProject {
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  context: string;
  tech: string[];
  imageSrc: string;
  code: string;
  demo?: string;
  docker?: string;
  projectType: string;
  focusArea: string;
  timeline: string;
  role: string;
  features: string[];
  reflection: string;
}

interface Props {
  projects: ExplorerProject[];
  detailMode?: boolean;
  initialCount?: number;
}

export default function ProjectsExplorerClient({
  projects,
  detailMode = false,
  initialCount = 6,
}: Props) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const searchSpace = [
        project.title,
        project.summary,
        project.context,
        project.projectType,
        project.focusArea,
        project.timeline,
        project.role,
        project.reflection,
        project.tech.join(' '),
        project.features.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchSpace.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [projects, query, selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const resetVisibleCount = () => setVisibleCount(initialCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetVisibleCount();
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    resetVisibleCount();
  };

  return (
    <div class="project-toolbar">
      <div class="project-toolbar-row">
        <label class="search-field">
          <span class="sr-only">Search projects</span>
          <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm8 2-3.5-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
          <input
            type="search"
            placeholder="Search title, tech, or reflection"
            value={query}
            onInput={(event) => handleQueryChange((event.currentTarget as HTMLInputElement).value)}
          />
        </label>
        <div class="project-filters" role="tablist" aria-label="Project categories">
          {categories.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                class={`filter-chip${isActive ? ' is-active' : ''}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div class="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.slug} class="project-card">
            <a class="project-image-link" href={project.demo ?? project.code} target="_blank" rel="noreferrer">
              <img src={project.imageSrc} alt={project.title} loading="lazy" />
            </a>
            <div class="project-card-body">
              <div class="project-meta-row">
                <span class="tag-chip">{project.category}</span>
                <span class="muted-copy">{project.timeline}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p class="muted-copy">{project.context}</p>
              <p class="project-kicker">{project.projectType}</p>
              <div class="tech-row">
                {project.tech.map((tech) => (
                  <span key={`${project.slug}-${tech}`} class="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div class="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <span>Live</span>
                  </a>
                )}
                <a href={project.code} target="_blank" rel="noreferrer">
                  <span>Code</span>
                </a>
                {project.docker && (
                  <a href={project.docker} target="_blank" rel="noreferrer">
                    <span>Docker</span>
                  </a>
                )}
              </div>
              {detailMode && (
                <div class="detail-stack">
                  <dl class="detail-list">
                    <div>
                      <dt>Type</dt>
                      <dd>
                        {project.projectType}
                      </dd>
                    </div>
                    <div>
                      <dt>Focus</dt>
                      <dd>{project.focusArea}</dd>
                    </div>
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>
                  <div>
                    <h4>Key features</h4>
                    <ul class="bullet-list compact">
                      {project.features.map((feature) => (
                        <li key={`${project.slug}-${feature}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Reflection</h4>
                    <p>{project.reflection}</p>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {!filteredProjects.length && (
        <div class="empty-state">
          <p>No projects matched the current search and filter combination.</p>
        </div>
      )}

      {filteredProjects.length > visibleProjects.length && (
        <div class="toolbar-actions">
          <button class="button-secondary" type="button" onClick={() => setVisibleCount((count) => count + initialCount)}>
            <span>Load more</span>
          </button>
        </div>
      )}
    </div>
  );
}
