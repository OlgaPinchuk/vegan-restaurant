// Project files
import SocialIcon from "./SocialIcon";
import contactData from "../../data/contacts.json";

export default function Footer() {
  const socialMedia = contactData.map((item) => (
    <SocialIcon key={item.id} item={item} />
  ));

  return (
    <section className="footer">
      <div className="social-media">{socialMedia}</div>
      <div className="copyright">
        <p> © 2021 • Beyond Meat</p>
      </div>
    </section>
  );
}
