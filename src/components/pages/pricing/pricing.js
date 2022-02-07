import styles from "./PricingStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import Accordion from "../../common/accordion/accordion";

function Pricing() {
  return (
    <ContentSection id="pricing" h2="Pricing">
      <Accordion title="Online Coaching - £20" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"></Accordion>
      <Accordion title="Fitness Plans - £20" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"></Accordion>
      <Accordion title="In Person Coaching - £20" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"></Accordion>
    </ContentSection>
  );
}

export default Pricing;
