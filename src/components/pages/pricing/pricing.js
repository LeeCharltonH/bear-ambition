import styles from "./PricingStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import Accordion from "../../common/accordion/accordion";

function Pricing() {
  return (
    <ContentSection id="pricing" h2="Pricing">
      <Accordion
        title="Online Coaching - From £35 per session"
        body={`Consultation inc. bmi, bat fat assessment. Goal setting session\nDedicated training programme\nOne to one support & prearranged check ins`}
      ></Accordion>
      <Accordion
        title="One to One Personal Training - £50 per hour "
        body={`Virtual consultation inc. bmi & body fat assessment. Goal setting\nDedicated training programme built for you.\nFlexible times to work around you `}
      ></Accordion>
      <Accordion
        title="Bespoke Programme Design - 6 Week Plan: £250, 8 Week Plan: £300"
        body={`Virtual consultation inc. bmi & body fat assessment. Goal setting\nCustom built plans for your goals incorporating body weight and gym equipment or either\nPeriodic checkins and redevelopment of plans if required `}
      ></Accordion>
    </ContentSection>
  );
}

export default Pricing;
