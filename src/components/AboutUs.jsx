import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
<section id="about">
            <div className="about-us-container">
                <div className="about-us-text">
                    <h2> About Us</h2>
                    <p>At Sabor Latino, our mission is to bring the true flavors and warm spirit of Ecuador straight to
                        the Elmhurst community. We believe that a great meal has the power to bring people together,
                        remind us of home, and make us feel like family. </p>

                    <p>Beyond the food, we strive to build a vibrant gathering place for our entire neighborhood. We
                        want Sabor Latino to be a comforting sanctuary where homesick friends can find a taste of their
                        childhood, where families can celebrate their happiest milestones, and where newcomers can
                        experience their very first taste of South American hospitality.</p>

                    <p> Whether you are joining us for a quick lunch, a weekend dinner, or a night of live music, we
                        promise to welcome you with open arms, treat you with genuine kindness, and serve you a
                        wonderful meal that feeds both your body and your soul.</p>
                </div>
                <img src="./images/insideRestaurant3.avif" alt="Restaurant Image" class="about-us-img"/>
            </div>
        </section>
  );
};

export default AboutUs;