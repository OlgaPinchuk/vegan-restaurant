// Project files
import BookingForm from "../components/BookingForm";
import hero from "../assets/images/owner.jpg";
import { Map } from "../components/common/Map";

export default function Contact() {
  return (
    <section className="page contact">
      <section className="hero">
        <img className="hero-image" src={hero} alt="Product" />
      </section>
      <section className="content-section">
        <div className="opening-hours">
          <h2>Opening hours</h2>
          <p>
            <b>Monday-Friday</b>
            16.00-24.00
          </p>
          <p>
            <b>Saturday</b>
            13.00-24.00
          </p>
          <p>
            <b>Sunday</b>
            12.00-22.00
          </p>
        </div>
        <div className="address">
          <h2>Address</h2>
          <address>
            <h3>Beyond Meat</h3>
            <p>Sofiagatan 1</p>
            <p>116 40</p>
            <p>Stockholm, Sweden</p>
          </address>
        </div>
        <BookingForm />
      </section>
      <Map />
    </section>
  );
}
