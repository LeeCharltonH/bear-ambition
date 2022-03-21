import styles from "./ProductStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import Card from "../../common/card/card";
import Flex from "../../common/flex/flex";

function Products() {
  return (
    <ContentSection id="services">
      <Flex>
        <Card
        src={require("../../../assets/images/services-online-coaching.png")}
          alt="Online coaching icon"
          h2="Online Coaching"
          p={`Need the motivation to stay on track?
          \n 
          Online training is a bespoke training plan which will work for you in the comfort of your own home. Save on the expense of travelling to the gym.
          \n
          All sessions will start with a workout assessment and conversation around your specific goals. 
          \n
          You will receive a workout programme for either use in the gym or at home alongside 1:2:1 training over WhatsApp, Zoom or Instagram.
          \n
          Programmes are developed to work for the space and equipment you have available. 
          `}
        ></Card>
        <Card
        src={require("../../../assets/images/services-one-to-one.jpeg")}
          alt="Online coaching icon"
          h2="One to One Personal Training"
          p={`One to One training sessions are bespoke programmes tailored to your goals. 
          \n
          You will leave the session with a workout plan for you to continue to use in your own time. 
          \n
          If you’re working towards a specific deadline or goal we can build a set plan to support you to hitting your goals. `}
        ></Card>
        <Card
        src={require("../../../assets/images/services-bespoke.png")}
          alt="Online coaching icon"
          h2="Bespoke Programme Design"
          p={`Stuck with your current workout regimen?
          \n 
          I will build you a personalised workout plan for your goals and time period. 
          \n
          Includes a virtual consultation to assess your current fitness session. 
          \n
          Goal setting with your body fat percentage and bmi and target plan for the completion of the plan. 
          \n
          A set of workout programmes for 6 or 8 weeks available. Check ins on your plan progression and video tutorials available. 
          `}
        ></Card>
      </Flex>
    </ContentSection>
  );
}

export default Products;
