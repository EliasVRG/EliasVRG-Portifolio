import { about, photos } from '../content/site';
import { useLanguage } from '../i18n/context';
import Photo from './Photo';
import Rich from './Rich';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre">
      <div>
        <h2>{t(about.title)}</h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.pt}>
            <Rich text={t(paragraph)} />
          </p>
        ))}
      </div>

      <div className="aside">
        <Photo {...photos.working} />

        <div className="facts">
          {about.facts.map((fact) => (
            <div className="row" key={fact.label.pt}>
              <span>{t(fact.label)}</span>
              <span>{t(fact.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
