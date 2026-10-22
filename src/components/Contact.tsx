import { contact } from '../content/site';
import { useLanguage } from '../i18n/context';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contato">
      <span className="eyebrow">{t(contact.eyebrow)}</span>
      <h2>{t(contact.title)}</h2>

      <div className="clist">
        {contact.links.map((link) => (
          <a
            key={link.who}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
          >
            <span className="who">{link.who}</span>
            <span className="val">{link.value}</span>
            <span className="arr" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
