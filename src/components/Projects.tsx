import type { CSSProperties } from 'react';
import { identity, projects } from '../content/site';
import { useLanguage } from '../i18n/context';
import Rich from './Rich';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="work" id="projetos">
      <div className="work-head">
        <h2>{t({ pt: 'Projetos', en: 'Projects' })}</h2>
        <span className="eyebrow">{identity.github.replace('https://', '')}</span>
      </div>

      {projects.map((project) => (
        <article
          className={`slab${project.featured ? ' slab--feature' : ''}`}
          key={project.id}
        >
          {project.art.kind === 'screenshot' ? (
            <div className="art art--screen">
              <img
                src={project.art.src}
                alt={t(project.art.alt)}
                width={1440}
                height={900}
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className="art"
              style={
                {
                  '--tint': project.art.tint,
                  '--tint-ink': project.art.ink,
                } as CSSProperties
              }
            >
              {/* O nome já está no h3 ao lado; aqui é tratamento visual. */}
              <div className="wordmark" aria-hidden="true">
                {project.name}
                <small>{project.art.caption}</small>
              </div>
            </div>
          )}

          <div className="slab-txt">
            <h3>{project.name}</h3>

            {project.featured ? (
              <div className="row">
                <div>
                  <p className="lead">{t(project.lead)}</p>
                  <div className="glinks">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link.muted ? 'muted' : undefined}
                      >
                        {t(link.label)}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  {project.deep && (
                    <p className="deep">
                      <Rich text={t(project.deep)} />
                    </p>
                  )}
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="lead">{t(project.lead)}</p>
                {project.deep && (
                  <p className="deep">
                    <Rich text={t(project.deep)} />
                  </p>
                )}
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="glinks">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link.muted ? 'muted' : undefined}
                    >
                      {t(link.label)}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
