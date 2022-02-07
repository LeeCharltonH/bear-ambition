import styles from "./ProductStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import Card from "../../common/card/card";
import Flex from "../../common/flex/flex";

function Products() {
  return (
    <ContentSection id="services">
      <Flex>
        <Card
          alt="Online coaching icon"
          h2="Online Coaching"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum,
          modi labore, officiis ullam inventore eum eveniet, consequuntur neque
          officia eos."
        ></Card>
        <Card
          alt="Online coaching icon"
          h2="Fitness Plans"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum,
          modi labore, officiis ullam inventore eum eveniet, consequuntur neque
          officia eos."
        ></Card>
        <Card
          alt="Online coaching icon"
          h2="In Person Coaching"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum,
          modi labore, officiis ullam inventore eum eveniet, consequuntur neque
          officia eos."
        ></Card>
      </Flex>
    </ContentSection>
  );
}

export default Products;
