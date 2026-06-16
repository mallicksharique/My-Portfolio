import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-card">
          <p>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:mdshariquealamdev@gmail.com">
              mdshariquealamdev@gmail.com
            </a>
          </p>

          <p>
            📱 <strong>Phone:</strong>+91 7870998312
          </p>

          <p>
            💼 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/md-sharique-alam-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/md-sharique-alam-dev
            </a>
          </p>

          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/mallicksharique"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mallicksharique
            </a>
          </p>
          <p>
  🎥 <strong>YouTube:</strong>{" "}
   <a
    href="https://www.youtube.com/@BeardYatri"
    target="_blank"
    rel="noopener noreferrer">
    Beard Yatri
  </a>
</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;