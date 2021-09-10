// Npm files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Link from "./Link";
import { contactLinks } from "../../data/contacts";

export default function Footer() {
  const socialMedia = contactLinks.map(({id, href, icon}) => {
    return (
      <Link href={href} key={id}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </Link>
    );
  });
  return (
    <section className="footer">
      <div className="social-media">{socialMedia}</div>
      <div className="copyright">
        <p> © 2021 • Beyond Meat</p>
      </div>
    </section>
  );
}
