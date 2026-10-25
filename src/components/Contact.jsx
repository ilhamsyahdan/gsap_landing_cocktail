import { useGSAP } from "@gsap/react";
import { openingHours, socials, storeInfo } from "../../constants";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#contact h2", {
      type: "words",
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.out",
    });

    timeLine
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.out",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.out",
        },
        "<",
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.webp"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.webp"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Visit our bar</h3>
          <p>{storeInfo.address}</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((item) => (
            <p key={item.day}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-6">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
