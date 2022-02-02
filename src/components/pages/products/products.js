import styles from "./ProductStyles.module.scss";

function Products() {
  return (
    <section id="services">
      <div class="carousel">
                <div class="content-block-item card-container">
                    <div class="service-card">
                        <img src={require("../../../assets/images/bearIcon.png")} width="70" alt="Online coaching icon" />
                        <h2>Online Coaching</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum, modi labore, officiis ullam inventore eum eveniet, consequuntur neque officia eos.</p>
                    </div>
                    <div class="service-card">
                        <img src={require("../../../assets/images/bearIcon.png")} width="70" alt="Online coaching icon" />
                        <h2>Fitness Plans</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum, modi labore, officiis ullam inventore eum eveniet, consequuntur neque officia eos.</p>
                    </div>
                    <div class="service-card">
                        <img src={require("../../../assets/images/bearIcon.png")} width="70" alt="Online coaching icon" />
                        <h2>In Person Coaching</h2>
                        <p><span uk-icon="location"></span> London</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illum, modi labore, officiis ullam inventore eum eveniet, consequuntur neque officia eos.</p>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Products;
