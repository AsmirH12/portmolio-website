import styles from "@/styles/partC.module.css";
import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function partC() {
  return (
    <MathJax.Provider>
      <Navbar title="Part C - Final Summative Test" />
      <div className="pageContainer">
        <div className="mainContainer">

          <div className="problem">
            <p>
              Type #1 - Neurotransmitters are the body’s chemical messengers.
              They carry chemical signals (messages) and transfer them from
              neurons in the brain to target cells, which can be other neurons,
              muscle cells or glands. Dopamine (<MathJax.Node className='math-jax' inline formula={'C_{8}H_{11}NO_{2}'} />) is a neurotransmitter
              that plays a major role in how we feel pleasure. How many moles
              of Hydrogen are in <MathJax.Node className='math-jax' inline formula={'56.78 \\ mg'} /> of dopamine?
            </p>

            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned} 
                m_{C_{8}H_{11}NO_{2}} 
                &= 56.78 \\ mg \\\\ 
                &= 56.78 \\ mg \\ (\\frac{1 \\ g}{1000 \\ mg}) \\\\ 
                &= 0.05678 \\ g \\\\
                M_{C_{8}H_{11}NO_{2}}
                &=8(12.01)+11(1.01)+14.01+2(16.00) \\ \\frac{g}{mol}\\\\
                &=153.20 \\ \\frac{g}{mol} \\\\ 
                n_{H}&= \\ ?\\end{aligned}`} />
              </div>



              <div>
                <MathJax.Node className='math-jax' formula={'n=\\frac{m}{M}'} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{C_{8}H_{11}NO_{2}}
                &= \\frac{m_{C_{8}H_{11}NO_{2}}}{M_{C_{8}H_{11}NO_{2}}} \\\\ \\\\
                &=\\frac{0.05678 \\ g}{153.20 \\ \\frac{g}{mol}} \\\\ \\\\
                n_{C_{8}H_{11}NO_{2}}&=3.706(10^{-5}) \\ mol \\\\ \\\\
                n_{H}
                &=n_{C_{8}H_{11}NO_{2}}(\\frac{11 \\ mol \\ H}{1 \\ mol \\ C_{8}H_{11}NO_{2}}) \\\\ \\\\
                &=3.706(10^{-5} \\ mol)(\\frac{11 \\ mol \\ H}{1 \\ mol \\ C_{8}H_{11}NO_{2}}) \\\\ \\\\
                &=40.77(10^{-5}) \\ mol \\\\ \\\\
                n_{H}&=4.077(10^{-4}) \\ mol 
                \\end{aligned}`} />

              </div>
            </div>
          </div>


          <div className="problem">
            <p>
              Type #2 - A SPECT (single photon emission computed tomography)
              scan is a type of imaging technique where a radioactive tracer
              gets injected into a patient’s bloodstream and emits gamma
              radiation, which can be tracked by a computed tomography (CT)
              scanner. This allows doctors to examine blood flow to various
              organs and tissues. SPECT is primarily used to monitor the brain
              and diagnose tumours, stress fractures, and areas of the brain
              with reduced blood flow.
            </p>
            <br />
            <p>
              Thallium-201 is a common radioactive tracer used in SPECT. The
              half-life of thallium-201 is 72.9 hours. If 13.0 mg of Thallium-201
              is injected into a patient’s bloodstream, how many particles of
              thallium-201 remain in the patient’s body after 2 weeks?
            </p>

            <div className="columnsCentered">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                Initial \\ m_{Tl-201}&=13.0 \\ mg(\\frac{1 \\ g}{1000 \\ mg}) \\\\ 
                &=0.0130 \\ g \\\\ \\\\
                t_{1/2}&=72.9 \\ hours/half-life \\\\ \\\\
                t&=2 \\ weeks(\\frac{7 \\ days}{1 \\ week})(\\frac{24 \\ hours}{1 \\ day}) \\\\ 
                &= 336 \\ hours \\\\ \\\\
                M_{Tl-201}&=201 \\ \\frac{g}{mol} \\\\ \\\\
                N_{A}&=\\frac{6.02(10^{23})}{mol} \\\\ \\\\
                Final \\ N_{Tl-201}&= \\ ?
              
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                Final \\ m&=(Initial \\ m)(\\frac{1}{2})^{\\frac{t}{t_{1/2}}} \\\\ \\\\
                n&=\\frac{m}{M} \\\\ \\\\
                N&=n(N_{A}) \\\\ 
                &=\\frac{m}{M}(N_{A})
                \\end{aligned}`} />
              </div>
            </div>

            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                Final \\ m_{Tl-201} &= (Initial \\ m_{Tl-201})(\\frac{1}{2})^{\\frac{t}{t_{1/2}}} \\\\ 
                &=0.0130 \\ g(\\frac{1}{2})^{\\frac{336 \\ hours}{72.9 \\ hours/half-life}} \\\\ 
                &=0.0130 \\ g(\\frac{1}{2})^{4.61 \\ half-lives} \\\\ 
                Final \\ m_{Tl-201}&=5.32(10^{-4}) \\ g \\\\ \\\\
                Final \\ N_{Tl-201} &= \\frac{Final \\ m_{Tl-201}}{M_{Tl-201}}(N_{A}) \\\\ 
                &= \\frac{5.32(10^{-4}) \\ g}{201 \\ \\frac{g}{mol}}(\\frac{6.02(10^{23}) \\ atoms}{mol}) \\\\ 
                &= \\frac{32.0(10^{19})}{201} \\ atoms \\\\ 
                &= 0.159(10^{19}) \\ atoms \\\\ 
                Final \\ N_{Tl-201}&= 1.59(10^{18}) \\ atoms


                \\end{aligned}`} />
            </div>




          </div>

          <div className="problem">
            <p>
              A percent composition analysis is performed on docosahexaenoic acid,
              the predominant omega-3 fatty acid found in
              the brain that is essential for the maintenance
              of normal brain function. It’s found to consist of Carbon,
              Hydrogen, and Oxygen, with 80.42% carbon by mass. However,
              the exact % of Hydrogen and Oxygen could not be obtained,
              but the the % Hydrogen is 0.0970% higher than the % Oxygen.
            </p>
            <br />
            <p>
              When 517.1 g of the acid was vaporized at 450.0°C
              in a 22.02 L container, the pressure was 430.0 kpa. What is the
              molecular formula?
            </p>
            <br />

            <p><u>Part 1 - Finding empirical formula</u></p>
            <p><i>In 100 g:</i></p>
            <div className="columnsCentered">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{C}&=80.42 \\ g \\\\ \\\\
              let \\ m_{O}&=x \\ g \\\\
              m_{H}&=x+0.0970 \\ g \\\\ \\\\
              EF=?
              \\end{aligned}
              `} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              x+(x+10) \\ g 
              &=100.0-80.42 \\ g \\\\
              &=19.58 \\ g \\\\
              x+(x+0.0970) &=19.58 \\\\
              2x+0.0970 &= 19.58 \\\\
              2x &= 19.48 \\\\
              x&=9.740 \\\\ 
              \\downarrow \\\\
              m_{O}&=9.740 \\ g \\\\
              m_{H}&=x+0.0970 \\ g \\\\
              &=9.740+0.0970 \\ g \\\\
              &=9.837 \\ g

              \\end{aligned}`}
                />
              </div>
            </div>

            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={'n=\\frac{m}{M}'} />
            </div>

            <br />

            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{C}&=\\frac{m_{C}}{M_{C}} \\\\ \\\\
                &=\\frac{80.42 \\ g}{12.01 \\frac{g}{mol}} \\\\ \\\\
                n_{C}&=6.696 \\ mol \\\\
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{H}&=\\frac{m_{H}}{M_{H}} \\\\ \\\\
                &=\\frac{9.837 \\ g}{1.01 \\frac{g}{mol}} \\\\ \\\\
                n_{H}&=9.740 \\ mol \\\\
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{O}&=\\frac{m_{O}}{M_{O}} \\\\ \\\\
                &=\\frac{9.740 \\ g}{16.00 \\frac{g}{mol}} \\\\ \\\\
                n_{O}&=0.6088 \\ mol \\\\
                \\end{aligned}`} />
              </div>
            </div>

            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' inline formula={`\\begin{aligned}
              n_{C}:n_{H}:n_{O}&=\\frac{6.696 \\ mol:9.740 \\ mol:0.6088 \\ mol}{0.6088 \\ mol} \\\\
              &=11.00:16.00:1.000 \\\\ \\\\
              \\therefore EF&=C_{11}H_{16}O 
              \\end{aligned}`} />
            </div>

          </div>




        </div>
      </div>
    </MathJax.Provider>
  );
}
