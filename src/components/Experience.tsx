import { experience } from '../content/site';
import { useLanguage } from '../i18n/context';
import Rich from './Rich';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="exp" id="experiencia">
      <div className="work-head">
        <h2>{t(experience.title)}</h2>
        <a className="cv-link" href={experience.cv.href} download>
          {t(experience.cv.label)}
        </a>
      </div>

      {experience.jobs.map((job) => (
        <article className="job" key={`${job.company}-${job.period.pt}`}>
          <div className="job-head">
            <h3>{t(job.role)}</h3>
            <span className="job-co">{job.company}</span>
            <span className="job-when">{t(job.period)}</span>
          </div>

          <ul>
            {job.points.map((point) => (
              <li key={point.pt}>
                <Rich text={t(point)} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Experience;
