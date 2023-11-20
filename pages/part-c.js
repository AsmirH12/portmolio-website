import styles from "@/styles/partC.module.css";
import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function partC() {
  return (
    <MathJax.Provider>
      <Navbar title="Part C - Final Summative Test" />
      <div className="pageContainer">
        <div className="mainContainer">
          <h1>Theme: Neurochemistry</h1>


          <div className="columnsCentered">
            <img className="brainImage" src="\Brain.png"></img>
          </div>



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
              half-life of Thallium-201 is 72.9 hours. If 13.0 mg of Thallium-201
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
              Type 3 - A percent composition analysis is performed on docosahexaenoic acid,
              the predominant omega-3 fatty acid found in
              the brain that is essential for the maintenance
              of normal brain function. It’s found to consist of Carbon,
              Hydrogen, and Oxygen, with 80.42% carbon by mass. However,
              the exact % of Hydrogen and Oxygen could not be obtained,
              but the % Hydrogen is 0.0970% higher than the % Oxygen.
            </p>
            <br />
            <p>
              When 517.1 g of the acid was vaporized at 450.2°C
              in a 22.02L container, the pressure was 429.5 kpa.
              What is the molecular formula?
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
            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' inline formula={`\\begin{aligned}
              n_{C}:n_{H}:n_{O}&=\\frac{6.696 \\ mol:9.740 \\ mol:0.6088 \\ mol}{0.6088 \\ mol} \\\\
              &=11.00:16.00:1.000 
              \\end{aligned}`} />
            </div>
            <br />
            <div className="columnsCentered">
              <MathJax.Node className='math-jax' inline formula={'\\therefore EF=C_{11}H_{16}O'} />
            </div>
            <br />
            <div className="columnsCentered">
              <MathJax.Node className='math-jax' inline formula={`\\begin{aligned}
              M_{EF}&=11(12.01)+16(1.01)+16.00 \\ \\frac{g}{mol} \\\\
              M_{EF}&=164.27 \\frac{g}{mol} \\\\
              \\end{aligned}`} />
            </div>

            <br />

            <p><u>Part 2 - Finding molecular formula</u></p>
            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                m&=517.1 \\ g \\\\ \\\\
                T&=450.2°C \\\\
                &=450.2+273.14 \\ K \\\\
                &=723.4 \\ K \\\\ \\\\
                V&=22.02 \\ L \\\\ \\\\
                P&=429.5 \\ kPa \\\\ \\\\
                MF&=\\ ?
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                PV&=NRT \\\\ \\\\
                PV&=\\frac{m}{M}RT \\\\ \\\\
                MPV&=mRT \\\\ \\\\
                M&=\\frac{mRT}{PV}
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                M_{MF}&=\\frac{mRT}{PV} \\\\ \\\\
                &=\\frac{517.1 \\ g(8.314 \\ \\frac{kPa \\cdot L}{mol \\cdot K})(723.4 \\ K)}{429.5 \\ kPa(22.02 \\ L)} \\\\ \\\\
                M_{MF}&=328.8 \\frac{g}{mol}
                \\end{aligned}`} />
              </div>
            </div>

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              \\frac{M_{MF}}{M_{EF}}&=\\frac{328.8 \\ \\frac{g}{mol}}{164.27 \\frac{g}{mol}} \\\\
              &=2.002
              \\end{aligned}`} />
            </div>

            <MathJax.Node className='math-jax' formula={'\\therefore \\ MF=2 \\cdot EF=2 \\cdot C_{11}H_{16}O=C_{22}H_{32}O_{2}'} />
          </div>

          <div className="problem">
            <p>
              Alcoholic beverages interfere with the brain’s
              communication pathways and makes it harder for the
              areas of the brain involved in balance, coordination,
              memory, and speech to perform their jobs properly. Ethanol is the main
              substance in alcohol. Liquid Ethanol can react with acetic acid to
              form ethyl acetate and water, as shown in this chemical equation:
            </p>

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={'C_{2}H_{6}O \\ (aq)+CH_{3}OOH \\ (aq) \\rightarrow CH_{3}CO_{2}CH_{2}CH_{3} \\ (aq) + H_{2}O (l)'} />
            </div>

            <p>
              What volume of <MathJax.Node className='math-jax' inline formula={'1.52M'} /> ethanol is required to react with <MathJax.Node className='math-jax' inline formula={'53.1 \\ mL'} /> of <MathJax.Node className='math-jax' inline formula={'5.84M'} /> acetic acid, and what will be the molar concentration of ethyl acetate if <MathJax.Node className='math-jax' inline formula={'0.0158 \\ L'} /> is produced?
            </p>


            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                C_{C_{2}H_{6}O}&=1.52 \\ \\frac{L}{mol} \\\\  \\\\
                V_{CH_{3}OOH}&=53.1 \\ mL(\\frac{1 \\ L}{1000 \\ mL}) \\\\
                &=0.0531 \\ L \\\\ \\\\
                C_{CH_{3}OOH}&=5.84 \\ \\frac{mol}{L} \\\\ \\\\
                V_{CH_{3}CO_{2}CH_{2}CH_{3}}&=0.158 \\ L \\\\ \\\\
                V_{C_{2}H_{6}O} &= \\ ? \\\\ \\\\
                C_{CH_{3}CO_{2}CH_{2}CH_{3}} &= \\ ?
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                C&=\\frac{n}{V} \\\\ \\\\
                n&=CV \\\\ \\\\
                V&=\\frac{n}{C}
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
            n_{CH_{3}OOH}&=C_{CH_{3}OOH}V_{CH_{3}OOH} \\\\
            &=5.84 \\ \\frac{mol}{L}(0.0531 \\ L) \\\\
            n_{CH_{3}OOH}&=0.310 \\ mol \\\\ \\\\

            n_{C_{2}H_{6}O}&=n_{CH_{3}OOH}(\\frac{1 \\ mol \\ C_{2}H_{6}O}{1 \\ mol \\ CH_{3}OOH}) \\\\
            n_{C_{2}H_{6}O}&=0.310 \\ mol \\\\ \\\\

            V_{C_{2}H_{6}O}&=\\frac{n_{C_{2}H_{6}O}}{C_{C_{2}H_{6}O}} \\\\
            &=\\frac{0.310 \\ mol}{1.52 \\ \\frac{mol}{L}} \\\\
            V_{C_{2}H_{6}O}&=0.204 \\ L \\\\ \\\\ \\\\

            n_{CH_{3}CO_{2}CH_{2}CH_{3}}&=n_{CH_{3}OOH}(\\frac{1 \\ mol \\ CH_{3}CO_{2}CH_{2}CH_{3}}{1 \\ mol \\ CH_{3}OOH}) \\\\
            &=0.310 \\ mol \\\\ \\\\

            C_{CH_{3}CO_{2}CH_{2}CH_{3}}&=\\frac{n_{CH_{3}CO_{2}CH_{2}CH_{3}}}{V_{CH_{3}CO_{2}CH_{2}CH_{3}}} \\\\
            &=\\frac{0.310 \\ mol}{0.0158 \\ L} \\\\
            C_{CH_{3}CO_{2}CH_{2}CH_{3}}&=19.6 \\ \\frac{mol}{L} 
            \\end{aligned}`} />
              </div>
            </div>

          </div>

          <div className="problem">
            <p>Type #5 - Anesthesia is the concept of using medicine to prevent pain and
              discomfort during surgeries and medical procedures. It works by
              blocking sensory signals to the brain. A popular gaseous anesthetic
              used for general anesthesia is nitrous oxide gas (<MathJax.Node className='math-jax' inline formula={'N_{2}O'} />), commonly
              known as laughing gas. Nitrous oxide is usually produced from the
              decomposition of solid ammonium nitrate into water vapour and nitrous oxide gas.
            </p>
            <br />
            <p>
              What mass of ammonium nitrate is needed to produce <MathJax.Node className='math-jax' inline formula={'580.7 \\ mL'} /> of nitrous oxide, given the reaction takes place at <MathJax.Node className='math-jax' inline formula={'400.3 \\ K'} /> and a pressure of <MathJax.Node className='math-jax' inline formula={'1125 \\ mmHg'} />?
            </p>
            <br />
            <p>
              After this reaction took place, the pressure was increased to <MathJax.Node className='math-jax' inline formula={'1165 mmHg '} /> and the temperature was decreased to <MathJax.Node className='math-jax' inline formula={'395.6K'} />. What is the new volume of water?
            </p>
            <br />


            <div className="columnsCentered">
              <div><i>Balanced chemical equation:</i> <MathJax.Node className='math-jax' inline formula={'NH_{4}NO_{3} \\ (s) \\rightarrow 2H_{2}O \\ (g)+N_{2}O \\ (g)'} /></div>
            </div>

            <br />

            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                V_1 \\ {N_{2}O}&=580.7 \\ mL(\\frac{1 \\ L}{1000 \\ mL}) \\\\
                &=0.5807 \\ L \\\\ \\\\
                T_{1}&=400.3 \\ K \\\\ \\\\
                T_{2}&=395.6 \\ K \\\\ \\\\
                P_{1}&=1125 \\ mmHg(\\frac{101.3 \\ kPa}{760 \\ mmHg}) \\\\
                &=150.0 \\ kPA \\\\ \\\\
                P_{2}&=1165 \\ mmHg(\\frac{101.3 \\ kPa}{760 \\ mmHg}) \\\\
                &=155.3 \\ kPA \\\\ \\\\
                M_{NH_{4}NO_{3}}&=14.01+4(1.01)+14.01+3(16.00) \\ \\frac{g}{mol} \\\\
                &=80.06 \\ \\frac{g}{mol} \\\\ \\\\
                m_{NH_{4}NO_{3}}&= \\ ? \\\\ \\\\
                V_{2} \\ H_{2}O &= \\ ?
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                PV&=nRT \\\\ \\\\
                n&=\\frac{PV}{RT} \\\\ \\\\ \\\\
                v&=\\frac{nRT}{P} \\\\ \\\\ \\\\
                n&=\\frac{m}{M} \\\\ \\\\
                m&=nM \\\\ \\\\ \\\\
                \\frac{P_{1}V_{1}}{T{1}}&=\\frac{P_{2}V_{2}}{T{2}} \\\\ \\\\
                \\frac{P_{1}V{1}T_{2}}{T_{1}}&=P_{2}V_{2} \\\\ \\\\
                V_{2}&=\\frac{P_{1}V{1}T_{2}}{T_{1}P_{2}}
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{N_{2}O}&=\\frac{P_{1}(V_{1 \\ N_{2}O})}{RT} \\\\ \\\\
                &=\\frac{150.0 \\ kPa(0.5807 \\ L)}{8.314 \\ \\frac{kPa \\cdot L}{mol \\cdot K}(400.3 \\ K)} \\\\ \\\\
                n_{N_{2}O}&=0.02617 \\ mol \\\\ \\\\ \\\\
                n_{NH_{4}NO_{3}}&=n_{N_{2}O}(\\frac{1 \\ mol \\ NH_{4}NO_{3}}{1 \\ mol \\ N_{2}O}) \\\\ \\\\
                n_{NH_{4}NO_{3}}&=0.02617 \\ mol \\\\ \\\\ \\\\
                m_{NH_{4}NO_{3}}&=n_{NH_{4}NO_{3}}(m_{NH_{4}NO_{3}}) \\\\ \\\\
                &=0.02617 \\ mol(80.06 \\ \\frac{g}{mol}) \\\\ \\\\
                m_{NH_{4}NO_{3}}&=2.095 \\ g \\\\ \\\\ \\\\
                
                \\end{aligned}`} />
              </div>
            </div>

          </div>




        </div>
      </div>
    </MathJax.Provider>
  );
}




















































































































































































