import styles from "@/styles/partA.module.css";
import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function partA() {
  return (
    <MathJax.Provider>
      <Navbar title="Part A - Test Corrections" />
      <div className="pageContainer">
        <div className="mainContainer">
          <h2 className={styles.test}>Quiz #1 - Moles</h2>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz1/Quiz1Page1.jpg"></img>
            <img className="quiz-picture" src="/quiz1/Quiz1Page2.jpg"></img>
          </div>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz1/Quiz1Page3.jpg"></img>
            <img className="quiz-picture" src="/quiz1/Quiz1Page4.jpg"></img>
          </div>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz1/Quiz1Page5.jpg"></img>
          </div>

          <div>
            {/* problem 1*/}
            <h3>Section III, Question 3</h3>
            <p>
              <b>
                Determine how many atoms of{" "}
                <MathJax.Node className="math-jax" inline formula={"H"} /> are
                in one mouthful of water if the average mouth can hold{" "}
                <MathJax.Node
                  className="math-jax"
                  inline
                  formula={"84.2 \\ g"}
                />{" "}
                of water.
              </b>
            </p>
            <p>
              I mistakenly assumed that{" "}
              <MathJax.Node className="math-jax" inline formula={"84.2 \\ g"} />{" "}
              was the mass of{" "}
              <MathJax.Node className="math-jax" inline formula={"H"} />, when
              it is actually the mass of{" "}
              <MathJax.Node className="math-jax" inline formula={"H_{2}O"} />.
              Corrected solution:
            </p>

            <div className="columns">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                m_{H_{2}O}&=84.2 \\ g \\\\ \\\\
                M_{H_{2}O}&=2(1.01)+16.00 \\ \\frac{g}{mol} \\\\
                &=18.02 \\ \\frac{g}{mol} \\\\ \\\\
                N_{A}&=\\frac{6.02 \\times 10^{23}}{mol} \\\\ \\\\
                N_{H}&=\\ ?
                \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n&=\\frac{m}{M} \\\\ \\\\
                N&=n \\times N_{A} \\\\ \\\\
                &=\\frac{m}{M} \\times N_{A}
                \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                N_{H_{2}O}&=\\frac{m_{H_{2}O}}{M_{H_{2}O}}(N_{A}) \\\\ \\\\
                &=\\frac{84.2 \\  g}{1.01 \\ \\frac{g}{mol}}(\\frac{6.02  \\times 10^{23} \\ molecules}{mol}) \\\\ \\\\
                &=\\frac{84.2 \\ mol(6.02 \\times 10^{23} \\ molecules)}{1.01 \\ mol} \\\\ \\\\
                &=\\frac{84.2(6.02 \\times 10^{23})}{1.01} \\ molecules \\\\ \\\\
                &=502 \\times 10^{23} \\ molecules \\\\ \\\\
                N_{H_{2}O}&=5.02 \\times 10^{25} \\ molecules \\\\ \\\\ \\\\
                N_{H}&=N_{H_{2}O} (\\frac{2 \\ H \\ atoms}{1 \\ H_{2}O \\ molecule}) \\\\ \\\\
                &=5.02 \\times 10^{25} \\ H_{2}O \\ molecules (\\frac{2 \\ H \\ atoms}{1 \\ H_{2}O \\ molecule}) \\\\ \\\\
                &=10.04 \\times 10^{25} \\ atoms \\\\ \\\\
                N_{H}&=1.00 \\times 10^{26} \\ atoms
                \\end{aligned}`} />
            </div>

            <br />

            {/* problem 2*/}
            <h3>Section III, Question 6</h3>
            <p>
              A <b>combustion analysis</b> is performed on{" "}
              <b>methanesulphonyl</b>, a sulphur containing organic compound.
            </p>
            <p>
              <MathJax.Node className="math-jax" inline formula={"1.22 \\ g"} /> of it is combusted
              and the products are <MathJax.Node className="math-jax" inline formula={"1.12 \\ g"} />{" "}
              of <MathJax.Node className="math-jax" inline formula={"CO_{2}"} />
              , <MathJax.Node className="math-jax" inline formula={"0.687 \\ g"} /> of water and{" "}
              <MathJax.Node className="math-jax" inline formula={"0.81 \\ g"} /> of sulphur dioxide.
              Determine the <b>empirical formula.</b>
            </p>
            <br />
            <p>
              I didn't calculate the mass and numbers of moles of{" "}
              <MathJax.Node className="math-jax" inline formula={"O"} />, which I was supposed to
              incorporate into the empirical formula. Corrected solution:
            </p>
            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{methanesulphonyl}&=1.22 \\ g \\\\ \\\\
              m_{CO_{2}}&=1.12 \\ g \\\\ \\\\
              m_{H_{2}O}&=0.687 \\ g \\\\ \\\\
              m_{SO_{2}}&=0.81 \\ g \\\\ \\\\
              EF&= \\ ?
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n&=\\frac{m}{M}
              \\end{aligned}`} />
            </div>

            <br />
            <br />

            <div className="columns">
              {/* Carbon*/}
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{C}&=m_{CO_{2}}(\\frac{M_{C}}{M_{CO_{2}}}) \\\\ \\\\
              &=1.12 \\ g(\\frac{12.01 \\frac{g}{mol}}{44.01 \\frac{g}{mol}}) \\\\ \\\\
              m_{C}&=0.306 \\ g \\\\ \\\\ \\\\
              n_{C}&=\\frac{m_{C}}{M_{C}} \\\\ \\\\
              &=\\frac{0.306 \\ g}{12.01 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{C}&=0.0255 \\ mol
              \\end{aligned}`} />

              {/* Hydrogen*/}
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{H}&=m_{H_{2}O}(\\frac{2(M_{H})}{M_{H_{2}O}}) \\\\ \\\\
              &=0.687 \\ g(\\frac{2.02 \\frac{g}{mol}}{18.02 \\frac{g}{mol}}) \\\\ \\\\
              m_{H}&=0.0770 \\ g \\\\ \\\\ \\\\
              n_{H}&=\\frac{2(m_{H})}{M_{H}} \\\\ \\\\
              &=\\frac{0.0770 \\ g}{1.01 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{H}&=0.0762 \\ mol
              \\end{aligned}`} />


              {/* Silicon*/}
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{S}&=m_{SO_{2}}(\\frac{M_{S}}{M_{SO_{2}}}) \\\\ \\\\
              &=0.81 \\ g(\\frac{32.07 \\frac{g}{mol}}{64.07 \\frac{g}{mol}}) \\\\ \\\\ \\\\
              m_{S}&=0.405 \\ g \\\\ \\\\ \\\\
              n_{S}&=\\frac{m_{S}}{M_{S}} \\\\ \\\\
              &=\\frac{0.405 \\ g}{32.07 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{S}&=0.0126 \\ mol
              \\end{aligned}`} />

              {/* Oxygen*/}
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{O}&=m_{methanesulphonyl}-(m_{C}+m_{H}+m_{S}) \\\\ \\\\
              &=1.22 \\ g-(0.306 \\ g + 0.0770 \\ g + 0.405 \\ g) \\\\ \\\\
              m_{O}&=0.432 \\ g \\\\ \\\\ \\\\
              n_{O}&=\\frac{m_{O}}{M_{O}} \\\\ \\\\
              &=\\frac{0.432 \\ g}{16.00 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{O}&=0.0270 \\ mol
              \\end{aligned}`} />
            </div>

            <br />
            <MathJax.Node
              className="math-jax" formula={
                "n_{C}:n_{H}:n_{S}:n_{O}=\\frac{0.0255 \\ mol:0.0762 \\ mol:0.0126 \\ mol:0.0270 \\ mol}{0.0126 \\ mol}"
              }
            />
            <MathJax.Node className="math-jax" formula={"\\doteq 2:6:1:2"} />
            <MathJax.Node className="math-jax" formula={"\\therefore \\ EF=C_{2}H_{6}SO_{2}"} />
          </div>

          <h2 className={styles.test}>Quiz #2 - Solutions & Gases</h2>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz2/Quiz2Page1.jpg"></img>
            <img className="quiz-picture" src="/quiz2/Quiz2Page2.jpg"></img>
          </div>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz2/Quiz2Page3.jpg"></img>
            <img className="quiz-picture" src="/quiz2/Quiz2Page4.jpg"></img>
          </div>

          <div className="columnsCentered">
            <img className="quiz-picture" src="/quiz2/Quiz2Page5.jpg"></img>
          </div>


          <h3>Section I, Question #7</h3>
          <p>As the temperature of a solution increases, the solubility of salts generally ______ and the solubility of gases _______.</p>
          <ol type="a" className="multiple-choice">
            <li>doesn't change, doesn't change</li>
            <li className="correct-choice"><p>increases, decreases</p></li>
            <li className="incorrect-choice">increases, increases</li>
            <li>decreases, decreases</li>
            <li>decreases, increases</li>
          </ol>
          <br />
          <p>The solubility of salts increase. However, the solubility of gases usually decreases because when temperature is increased,
            the gas particles gain excessive kinetic energy and can escape the solution, which decreases the solubility.
          </p>

          <br />

          <h3>Section I, Question #14</h3>
          <p>At <MathJax.Node className='math-jax' inline formula={'101 \\ kPa'} /> pressure and a temperature of <MathJax.Node className='math-jax' inline formula={'253 \\ K'} />, the <b>density</b> of a gas is</p>
          <ol type="a" className="multiple-choice">
            <li>the same as at STP</li>
            <li className="incorrect-choice">less than at STP</li>
            <li className="correct-choice">greater than at STP</li>
            <li>about 10 % less than at STP</li>
            <li>always a constant regardless of temperature and pressure</li>
          </ol>

          <br />

          <p>The pressure of <MathJax.Node className='math-jax' inline formula={'101 \\ kPa'} /> is 1 <MathJax.Node className='math-jax' inline formula={'kPa'} /> higher than the pressure at STP. According to Boyle's Law, pressure is inversely proportional to volume, so when pressure is increased, volume decreases.
            The temperature of <MathJax.Node className='math-jax' inline formula={'253 \\ K'} /> is <MathJax.Node className='math-jax' inline formula={'20 \\ K'} /> lower than the temperature at STP. From Charles' Law, temperature is directly proportional to volume, so when temperature decreases, volume also decreases.
            Overall, the increase in pressure and decrease in temperature both lower the volume, and this in turn increases the density.
          </p>

          <br />

          <h3>Section II, Question #1</h3>
          <p>Think back to one of the many classroom demonstrations that you witnessed or think about some everyday phenomenon that occur with gases. <b>Briefly describe either a demonstration or an example</b> that exhibits one of the simple gas law relationships. State the law and <b>explain the phenomenon at the particle level.</b></p>

          <br />

          <p>In my explanation I only talked about Charles' Law and failed to recognize that Guy-Lessac's Law is also at play. It states that pressure is directly proportional to temperature, so when temperature increases when it is hot, the pressure of the air in bike tires also increases. At the particle level, the particles gain kinectic energy and collide with the inner sides of the tires in higher frequencies and more force, thereby increasing pressure.</p>

          <br />
          <h2 className={styles.test}>Quiz #3 - Stoichiometry</h2>
          <div className="columnsCentered">
            <img className="quiz-picture" src="/Quiz3.jpg"></img>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
