import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function partC() {
  return (
    <MathJax.Provider>
      <Navbar title="Part C - Final Summative Test" />
      <div className="pageContainer">
        <div className="mainContainer">
          <h1>Theme: <span className="brainColour">Neurochemistry</span></h1>

          <div className="columnsCentered">
            <img className="brainImage" src="\Brain.png"></img>
          </div>

          <h2 className="testSectionHeader">
            Moletiple Choice
          </h2>


          <div className="problem">
            <p>1. What is the percent composition by mass of carbon in gamma-aminobutyric acid (<MathJax.Node className='math-jax' inline formula={'C_{4}H_{9}NO_{2}'} />), an amino acid and inhibitory neurotransmitter known for creating a calming effect by slowing down signals in your central nervous system?</p>
            <br />
            <ol type="a" className="multiple-choice">
              <li><MathJax.Node className='math-jax' inline formula={'8.8 \\%'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'11.6 \\%'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'23.3 \\%'} /></li>
              <li className="correct-choice"><MathJax.Node className='math-jax' inline formula={'46.6\\%'} /></li>
            </ol>
          </div>

          <div className="problem">
            <p>2. How many moles are in <MathJax.Node className='math-jax' inline formula={'20.4 \\ g'} /> of serotonin, a monoamine neurotransmitter with a molecular formula of <MathJax.Node className='math-jax' inline formula={'C_{10}H_{12}N_{2}O'} /> that controls mood, sleep, and memory?</p>
            <br />
            <ol type="a" className="multiple-choice">
              <li className="correct-choice"><MathJax.Node className='math-jax' inline formula={'0.116 \\ mol'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'0.474 \\ mol'} /></li>
              <li ><MathJax.Node className='math-jax' inline formula={'20.4 \\ mol'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'8.64 \\ mol'} /></li>
            </ol>
          </div>

          <div className="problem">
            <p>3. A sample of hydrogen sulfide, a gaseous neuromodulator, undergoes a decrease in pressure and an increase in temperature. The density of the gas will:</p>
            <br />
            <ol type="a" className="multiple-choice">
              <li>Increase</li>
              <li className="correct-choice">Decrease</li>
              <li >Stay the same</li>
              <li>Depends on the amount of pressure and temperature change</li>
            </ol>
          </div>

          <div className="problem">
            <p>4. Cerebrospinal fluid, is a clear watery fluid surrounding the nervous system. It  is composed of various aqueous ionic compounds in small amounts, with <MathJax.Node className='math-jax' inline formula={'NaCl'} /> being the most abundant salt. <MathJax.Node className='math-jax' inline formula={'NaCl'} /> can react with lead nitrate, as shown by this chemical equation: </p>
            <MathJax.Node className='math-jax' formula={'2NaCl \\ (aq)+Pb(NO_{3})_{2} \\ (aq) \\rightarrow 2NaNO_{3} \\ (aq)+PbCl_{2} \\ (s)'} />
            <p>How many moles of lead chloride precipitate are produced when <MathJax.Node className='math-jax' inline formula={'11.0 \\ L'} /> of <MathJax.Node className='math-jax' inline formula={'0.500 \\ \\frac{mol}{L}'} /> <MathJax.Node className='math-jax' inline formula={'NaCl'} /> solution is mixed with <MathJax.Node className='math-jax' inline formula={'12.0 \\ L'} /> of <MathJax.Node className='math-jax' inline formula={'0.250 \\ \\frac{mol}{L}'} /> lead nitrate solution?</p>
            <br />
            <ol type="a" className="multiple-choice">
              <li className="correct-choice"><MathJax.Node className='math-jax' inline formula={'2.75 \\ mol'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'5.50 \\ mol'} /></li>
              <li ><MathJax.Node className='math-jax' inline formula={'6.00 \\ mol'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'1.50 \\ mol'} /></li>
            </ol>
          </div>

          <div className="problem">
            <p>5. What is the density, in <MathJax.Node className='math-jax' inline formula={'\\frac{g}{L}'} />, of nitric oxide (<MathJax.Node className='math-jax' inline formula={'NO'} />), a gas in the brain that is involved in neurotransmission and the regulation of blood flow to areas of the brain, if it is pressurized at <MathJax.Node className='math-jax' inline formula={'128 \\ kPa'} /> with a temperature of <MathJax.Node className='math-jax' inline formula={'300 \ K'} />?</p>
            <br />
            <ol type="a" className="multiple-choice">
              <li><MathJax.Node className='math-jax' inline formula={'3.08 \\ \\frac{g}{L}'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'0.719 \\ \\frac{g}{L}'} /></li>
              <li className="correct-choice"><MathJax.Node className='math-jax' inline formula={'1.54 \\ \\frac{g}{L}'} /></li>
              <li><MathJax.Node className='math-jax' inline formula={'0.821 \\ \\frac{g}{L}'} /></li>
            </ol>
          </div>

          <h2 className="testSectionHeader">
            Long Answer
          </h2>

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
                &= 0.05678 \\ g \\\\ \\\\
                M_{C_{8}H_{11}NO_{2}}
                &=8(12.01)+11(1.01)+14.01+2(16.00) \\ \\frac{g}{mol}\\\\
                &=153.20 \\ \\frac{g}{mol} \\\\ \\\\
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
                n_{C_{8}H_{11}NO_{2}}&=3.706(10^{-4}) \\ mol \\\\ \\\\ \\\\
                n_{H}
                &=n_{C_{8}H_{11}NO_{2}}(\\frac{11 \\ mol \\ H}{1 \\ mol \\ C_{8}H_{11}NO_{2}}) \\\\ \\\\
                &=3.706(10^{-4} \\ mol)(11) \\\\ \\\\
                &=40.77(10^{-4}) \\ mol \\\\ \\\\
                n_{H}&=4.077(10^{-3}) \\ mol 
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
              half-life of Thallium-201 is <MathJax.Node className='math-jax' inline formula={'72.9  \\ hours'} />. If <MathJax.Node className='math-jax' inline formula={'13.0 \\ mg'} /> of Thallium-201
              is injected into a patient’s bloodstream, how many particles of
              thallium-201 remain in the patient’s body after <MathJax.Node className='math-jax' inline formula={'2 \\ weeks'} />?
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
                Final \\ m&=(Initial \\ m)(\\frac{1}{2})^{\\frac{t}{t_{1/2}}} \\\\ \\\\ \\\\
                n&=\\frac{m}{M} \\\\ \\\\ \\\\
                N&=n(N_{A}) \\\\ \\\\
                &=\\frac{m}{M}(N_{A})
                \\end{aligned}`} />
              </div>
            </div>

            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                Final \\ m_{Tl-201} &= (Initial \\ m_{Tl-201})(\\frac{1}{2})^{\\frac{t}{t_{1/2}}} \\\\ \\\\
                &=0.0130 \\ g(\\frac{1}{2})^{\\frac{336 \\ hours}{72.9 \\ hours/half-life}} \\\\ \\\\
                &=0.0130 \\ g(\\frac{1}{2})^{4.61 \\ half-lives} \\\\ \\\\
                Final \\ m_{Tl-201}&=5.32(10^{-4}) \\ g \\\\ \\\\ \\\\
                Final \\ N_{Tl-201} &= \\frac{Final \\ m_{Tl-201}}{M_{Tl-201}}(N_{A}) \\\\  \\\\
                &= \\frac{5.32(10^{-4}) \\ g}{201 \\ \\frac{g}{mol}}(\\frac{6.02(10^{23}) \\ atoms}{mol}) \\\\  \\\\
                &= \\frac{32.0(10^{19})}{201} \\ atoms \\\\ \\\\
                &= 0.159(10^{19}) \\ atoms \\\\ \\\\
                Final \\ N_{Tl-201}&= 1.59(10^{18}) \\ atoms


                \\end{aligned}`} />
            </div>




          </div>

          <div className="problem">
            <p>
              Type #3 - A percent composition analysis is performed on <MathJax.Node className='math-jax' inline formula={'docosahexaenoic \\ acid'} />,
              the predominant omega-3 fatty acid found in
              the brain that is essential for the maintenance
              of normal brain function. It’s found to consist of Carbon,
              Hydrogen, and Oxygen, with <MathJax.Node className='math-jax' inline formula={'80.42\\%'} /> carbon by mass. The exact <MathJax.Node className='math-jax' inline formula={'\\%'} /> of Hydrogen and Oxygen by mass could not be obtained,
              but the <MathJax.Node className='math-jax' inline formula={'\\%'} /> Hydrogen is <MathJax.Node className='math-jax' inline formula={'0.0970\\%'} /> higher than the <MathJax.Node className='math-jax' inline formula={'\\%'} /> Oxygen.
            </p>
            <br />
            <p>
              When <MathJax.Node className='math-jax' inline formula={'517.1 \\ g'} /> of the acid was vaporized at <MathJax.Node className='math-jax' inline formula={'450.2°C'} /> in a <MathJax.Node className='math-jax' inline formula={'22.02L'} /> container, the pressure was <MathJax.Node className='math-jax' inline formula={'429.5 \\ kpa'} />. What is the molecular formula?
            </p>
            <br />

            <p><u>Part 1 - Finding empirical formula</u></p>
            <p><i>In 100 g:</i></p>
            <div className="columnsCentered">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{C}&=80.42 \\ g \\\\ \\\\
              let \\ m_{O}&=x \\ g \\\\ \\\\
              m_{H}&=x+0.0970 \\ g \\\\ \\\\
              EF=?
              \\end{aligned}
              `} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              x+(x+0.0970) \\ 
              &=100.0-80.42 \\ \\\\
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
              n_{C}:n_{H}:n_{O}&=\\frac{6.696 \\ mol:9.740 \\ mol:0.6088 \\ mol}{0.6088 \\ mol} \\\\ \\\\
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
              \\frac{M_{MF}}{M_{EF}}&=\\frac{328.8 \\ \\frac{g}{mol}}{164.27 \\frac{g}{mol}} \\\\ \\\\
              &=2.002 \\\\
              \\end{aligned}`} />
            </div>

            <MathJax.Node className='math-jax' formula={'\\therefore \\ MF=2 \\cdot EF=2 \\cdot C_{11}H_{16}O=C_{22}H_{32}O_{2}'} />
          </div>

          <div className="problem">
            <p>
              Type #4 - Alcoholic beverages interfere with the brain’s
              communication pathways and make it harder for the
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
                C_{C_{2}H_{6}O}&=1.52 \\ \\frac{mol}{L} \\\\ \\\\
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
            n_{CH_{3}OOH}&=C_{CH_{3}OOH}V_{CH_{3}OOH} \\\\ \\\\
            &=5.84 \\ \\frac{mol}{L}(0.0531 \\ L) \\\\ \\\\
            n_{CH_{3}OOH}&=0.310 \\ mol \\\\ \\\\ \\\\

            n_{C_{2}H_{6}O}&=n_{CH_{3}OOH}(\\frac{1 \\ mol \\ C_{2}H_{6}O}{1 \\ mol \\ CH_{3}OOH}) \\\\ \\\\
            n_{C_{2}H_{6}O}&=0.310 \\ mol \\\\ \\\\ \\\\

            V_{C_{2}H_{6}O}&=\\frac{n_{C_{2}H_{6}O}}{C_{C_{2}H_{6}O}} \\\\ \\\\
            &=\\frac{0.310 \\ mol}{1.52 \\ \\frac{mol}{L}} \\\\ \\\\
            V_{C_{2}H_{6}O}&=0.204 \\ L \\\\ \\\\ \\\\

            n_{CH_{3}CO_{2}CH_{2}CH_{3}}&=n_{CH_{3}OOH}(\\frac{1 \\ mol \\ CH_{3}CO_{2}CH_{2}CH_{3}}{1 \\ mol \\ CH_{3}OOH}) \\\\ \\\\
            n_{CH_{3}CO_{2}CH_{2}CH_{3}}&=0.310 \\ mol \\\\ \\\\ \\\\

            C_{CH_{3}CO_{2}CH_{2}CH_{3}}&=\\frac{n_{CH_{3}CO_{2}CH_{2}CH_{3}}}{V_{CH_{3}CO_{2}CH_{2}CH_{3}}} \\\\ \\\\
            &=\\frac{0.310 \\ mol}{0.0158 \\ L} \\\\ \\\\
            C_{CH_{3}CO_{2}CH_{2}CH_{3}}&=19.6 \\ \\frac{mol}{L} 
            \\end{aligned}`} />
              </div>
            </div>

          </div>

          <div className="problem">
            <p>Type #5 - Anesthesia is the concept of using medicine to prevent pain and
              discomfort in patients during surgeries and medical procedures. It works by
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
              After this reaction took place, the pressure was increased to <MathJax.Node className='math-jax' inline formula={'1165 mmHg '} /> and the temperature was decreased to <MathJax.Node className='math-jax' inline formula={'395.6K'} />. What is the new volume of water vapour?
            </p>
            <br />


            <div className="columnsCentered">
              <div><i>Balanced chemical equation:</i> <MathJax.Node className='math-jax' inline formula={'NH_{4}NO_{3} \\ (s) \\rightarrow 2H_{2}O \\ (g)+N_{2}O \\ (g)'} /></div>
            </div>

            <br />

            <div className="columns">
              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                V_{{N_{2}O}}&=580.7 \\ mL(\\frac{1 \\ L}{1000 \\ mL}) \\\\
                &=0.5807 \\ L \\\\ \\\\
                T_{1}&=400.3 \\ K \\\\ \\\\
                T_{2}&=395.6 \\ K \\\\ \\\\
                P_{1}&=1125 \\ mmHg(\\frac{101.3 \\ kPa}{760 \\ mmHg}) \\\\
                &=150.0 \\ kPa \\\\ \\\\
                P_{2}&=1165 \\ mmHg(\\frac{101.3 \\ kPa}{760 \\ mmHg}) \\\\
                &=155.3 \\ kPa \\\\ \\\\
                M_{NH_{4}NO_{3}}&=14.01+4(1.01)+14.01+3(16.00) \\ \\frac{g}{mol} \\\\
                &=80.06 \\ \\frac{g}{mol} \\\\ \\\\
                m_{NH_{4}NO_{3}}&= \\ ? \\\\ \\\\
                V_{2} \\ H_{2}O &= \\ ?
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                PV&=nRT \\\\ \\\\
                n&=\\frac{PV}{RT} \\\\ \\\\
                v&=\\frac{nRT}{P} \\\\ \\\\ \\\\
                n&=\\frac{m}{M} \\\\ \\\\
                m&=nM \\\\ \\\\ \\\\
                \\frac{P_{1}V_{1}}{T_{1}}&=\\frac{P_{2}V_{2}}{T_{2}} \\\\ \\\\
                \\frac{P_{1}V_{1}T_{2}}{T_{1}}&=P_{2}V_{2} \\\\ \\\\
                V_{2}&=\\frac{P_{1}V_{1}T_{2}}{T_{1}P_{2}}
                \\end{aligned}`} />
              </div>

              <div>
                <MathJax.Node className='math-jax' formula={`\\begin{aligned}
                n_{N_{2}O}&=\\frac{P_{1}(V_{N_{2}O})}{RT_{1}} \\\\ \\\\
                &=\\frac{150.0 \\ kPa(0.5807 \\ L)}{8.314 \\ \\frac{kPa \\cdot L}{mol \\cdot K}(400.3 \\ K)} \\\\ \\\\
                n_{N_{2}O}&=0.02617 \\ mol \\\\ \\\\ \\\\

                n_{NH_{4}NO_{3}}&=n_{N_{2}O}(\\frac{1 \\ mol \\ NH_{4}NO_{3}}{1 \\ mol \\ N_{2}O}) \\\\ \\\\
                n_{NH_{4}NO_{3}}&=0.02617 \\ mol \\\\ \\\\ \\\\

                m_{NH_{4}NO_{3}}&=n_{NH_{4}NO_{3}}(m_{NH_{4}NO_{3}}) \\\\ \\\\
                &=0.02617 \\ mol(80.06 \\ \\frac{g}{mol}) \\\\ \\\\
                m_{NH_{4}NO_{3}}&=2.095 \\ g \\\\ \\\\ \\\\

                n_{H_{2}O}&=n_{N_{2}O}(\\frac{2 \\ mol \\ H_{2}O}{1 \\ mol \\ N_{2}O}) \\\\ \\\\
                &=0.02617 \\ mol(\\frac{2 \\ mol \\ H_{2}O}{1 \\ mol \\ N_{2}O}) \\\\ \\\\
                n_{H_{2}O}&=0.05234 \\ mol \\\\ \\\\ \\\\

                V_{1} \\ H_{2}O&=\\frac{n_{H_{2}O}RT_{1}}{P_{1}} \\\\ \\\\
                &=\\frac{0.05243 \\ mol(8.314 \\ \\frac{kPa \\cdot L}{mol \\cdot K})(400.3 \\ K)}{150.0 \\ kPa} \\\\ \\\\
                V_{1} \\ H_{2}O&=1.163 \\ L \\\\ \\\\ \\\\

                V_{2} \\ H_{2}O&=\\frac{P_{1}(V_{1} \\ H_{2}O)T_{2}}{T_{1}P_{2}} \\\\ \\\\
                &=\\frac{150.0 \\ kPa(1.163 \\ L)(395.6 \\ K)}{400.3 \\ K(155.3 \\ kPa)} \\\\ \\\\
                V_{2} \\ H_{2}O&=1.110 \\ L  
                
                \\end{aligned}`} />
              </div>
            </div>

          </div>

          <div className="problem">
            <p>Type #6 - Phosphorylation is a type of reaction in which a phosphate molecule reacts with an organic compound. This reaction commonly occurs in the brain and is an essential process for neuronal function and growth, regulating neurotransmitter release and helping nerve cell impulse propagation. The chemical equation for a phosphorylation reaction involving serine reacting with ATP to produce phosphoserine and ADP is given by the following chemical equation:</p>
            <MathJax.Node className='math-jax' formula={'C_{3}H_{7}NO_{3} \\ (s)+C_{10}H_{16}N_{5}O_{13}P_{3} \\ (aq) \\rightarrow C_{3}H_{8}NO_{6}P \\ (s)+C_{10}H_{15}N_{5}O_{10}P_{2} \\ (aq)'} />
            <p>If <MathJax.Node className='math-jax' inline formula={'4.13 \\ g'} /> of serine reacts with <MathJax.Node className='math-jax' inline formula={'0.644 \\ L'} /> of <MathJax.Node className='math-jax' inline formula={'0.0598 \\ \\frac{mol}{L}'} /> ATP solution, </p>
            <br />

            <p>(a) Identify the limiting reactant</p>
            <br />

            <div className="columns">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{C_{3}H_{7}NO_{3}}&=4.13 \\ g \\\\
              M_{C_{3}H_{7}NO_{3}}&=3(12.01)+7(1.01)+14.01+3(16.00) \\ \\frac{g}{mol} \\\\
              &=105.11 \\ \\frac{g}{mol} \\\\ \\\\

              V_{C_{10}H_{16}N_{5}O_{13}P_{3}}&=0.644 \\ L \\\\
              C_{C_{10}H_{16}N_{5}O_{13}P_{3}}&=0.0598 \\ \\frac{mol}{L} \\\\ \\\\
              
              Limiting \\ reactant &= \\ ?
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n&=\\frac{m}{M} \\\\ \\\\
              C&=\\frac{n}{V} \\\\ \\\\
              n&=CV
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{3}H_{7}NO_{3}}&=\\frac{m_{C_{3}H_{7}NO_{3}}}{M_{C_{3}H_{7}NO_{3}}} \\\\ \\\\
              &=\\frac{4.13 \\ g}{105.11 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{C_{3}H_{7}NO_{3}}&=0.0393 \\ mol \\\\ \\\\\ \\\\

              n_{C_{10}H_{16}N_{5}O_{13}P_{3}}&=C_{C_{10}H_{16}N_{5}O_{13}P_{3}}V_{C_{10}H_{16}N_{5}O_{13}P_{3}} \\\\ \\\\
              &=0.0598 \\ \\frac{mol}{L}(0.644 \\ L) \\\\ \\\\
              n_{C_{10}H_{16}N_{5}O_{13}P_{3}}&=0.0385 \\ mol
              \\end{aligned}`} />
            </div>

            <br />

            <p><MathJax.Node className='math-jax' inline formula={'n_{C_{3}H_{7}NO_{3}}'} /> and <MathJax.Node className='math-jax' inline formula={'n_{C_{10}H_{16}N_{5}O_{13}P_{3}}'} /> have a <MathJax.Node className='math-jax' inline formula={'1:1'} /> ratio, and so if <MathJax.Node className='math-jax' inline formula={'0.0393 \\ mol'} /> of <MathJax.Node className='math-jax' inline formula={'C_{3}H_{7}NO_{3}'} /> was reacted, then <MathJax.Node className='math-jax' inline formula={'0.0393 \\ mol'} /> of <MathJax.Node className='math-jax' inline formula={'C_{10}H_{16}N_{5}O_{13}P_{3}'} /> would be needed, but there is only <MathJax.Node className='math-jax' inline formula={'0.0385 \\ mol'} /> of it. </p>
            <br />
            <div className="columnsCentered">
              <p><MathJax.Node className='math-jax' inline formula={'\\therefore C_{10}H_{16}N_{5}O_{13}P_{3}'} /> is the limiting reactant.</p>
            </div>

            <br />

            <p>b) If the percent yield of <MathJax.Node className='math-jax' inline formula={'C_{3}H_{8}NO_{6}P'} /> is <MathJax.Node className='math-jax' inline formula={'87.3\\%'} />, what is the actual mass produced?</p>
            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{10}H_{16}N_{5}O_{13}P_{3}}&=0.0385 \\ mol \\\\ \\\\
              M_{C_{3}H_{8}NO_{6}P}&=3(12.01)+8(1.01)+14.01+6(16.00)+30.97 \\ \\frac{g}{mol} \\\\
              &=185.09 \\ \\frac{g}{mol} \\\\ \\\\
              \\% \\ yield&=87.3\\% \\\\ \\\\
              Actual \\ yield&= \\ ?
              \\end{aligned}`} />
            </div>

            <br />
            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n&=\\frac{m}{M} \\\\ \\\\
              m&=nM \\\\  \\\\

              \\frac{Actual \\ Yield}{Theoretical \\ Yield}(100\\%)&=Percent \\ Yield \\\\ \\\\ 
              \\ Actual \\ Yield&=\\frac{Percent \\ Yield(Theoretical \\ Yield)}{100\\%}
              \\end{aligned}`} />
            </div>

            <br />
            <br />
            <br />

            <div className="columnsCentered">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{3}H_{8}NO_{6}P}&=n_{C_{10}H_{16}N_{5}O_{13}P_{3}}(\\frac{1 \\ mol \\ C_{3}H_{8}NO_{6}P}{1 \\ mol \\ C_{10}H_{16}N_{5}O_{13}P_{3}}) \\\\ \\\\
              n_{C_{3}H_{8}NO_{6}P}&=0.0385 \\ mol \\\\ \\\\ \\\\

              m_{C_{3}H_{8}NO_{6}P}&=n_{C_{3}H_{8}NO_{6}P}M_{C_{3}H_{8}NO_{6}P} \\\\ \\\\
              &=0.0385 \\ mol(185.09 \\ \\frac{g}{mol}) \\\\ \\\\
              m_{C_{3}H_{8}NO_{6}P}&=7.13 \\ g \\\\ \\\\ \\\\

              Theoretical \\ Yield&=7.13 \\ g \\\\ \\\\ \\\\

              Actual \\ Yield&=\\frac{Percent \\ Yield(Theoretical \\ Yield)}{100\\%} \\\\ \\\\
              &=\\frac{87.3\\%(7.13 \\ g)}{100\\%} \\\\ \\\\
              Actual \\ Yield&=6.22 \\ g
              \\end{aligned}`} />
            </div>
          </div>

          <div className="problem">
            <p>Type #7 - Headaches occur when nociceptors (pain-sensitive nerve endings) react to triggers that cause headaches and subsequently send messages to the thalamus, which is the brain’s relay station for pain. Aspirin, or acetylsalicylic acid, can be used to treat headaches. It can be produced from reacting salicylic acid with acetic anhydride to produce acetylsalicylic acid and acetic acid, as shown by this chemical equation:</p>
            <MathJax.Node className='math-jax' formula={'C_{7}H_{6}O_{3}+C_{4}H_{6}O_{3} \\rightarrow C_{9}H_{8}O_{4}+C_{2}H_{4}O_{2}'} />

            <p>a) Identify the limiting reagent if <MathJax.Node className='math-jax' inline formula={'74.41 \\ g'} /> of salicylic acid reacts with <MathJax.Node className='math-jax' inline formula={'52.52 \\ g'} /> of acetic anhydride </p>
            <br />

            <div className="columnsCentered">
              <p><i>Chemical equation already balanced</i></p>
            </div>
            <br />


            <div className="columns">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              m_{C_{7}H_{6}O_{3}}&=74.41 \\ g \\\\
              M_{C_{7}H_{6}O_{3}}&=7(12.01)+6(1.01)+3(16.00) \\ \\frac{g}{mol} \\\\
              &=138.13 \\ \\frac{g}{mol} \\\\ \\\\
              m_{C_{4}H_{6}O_{3}}&=52.52 \\ g \\\\
              M_{C_{4}H_{6}O_{3}}&=4(12.01)+6(1.01)+3(16.00) \\ \\frac{g}{mol} \\\\
              &=102.10 \\ \\frac{g}{mol} \\\\ \\\\
              Limiting \\ reagent&= \\ ?
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={'n=\\frac{m}{M}'} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{7}H_{6}O_{3}}&=\\frac{m_{C_{7}H_{6}O_{3}}}{M_{C_{7}H_{6}O_{3}}} \\\\ \\\\
              &=\\frac{74.41 \\ g}{138.13 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{C_{7}H_{6}O_{3}}&=0.5387 \\ mol \\\\ \\\\ \\\\

              n_{C_{4}H_{6}O_{3}}&=\\frac{m_{C_{4}H_{6}O_{3}}}{M_{C_{4}H_{6}O_{3}}} \\\\ \\\\
              &=\\frac{52.52 \\ g}{102.10 \\ \\frac{g}{mol}} \\\\ \\\\
              n_{C_{4}H_{6}O_{3}}&=0.5144 \\ mol
              \\end{aligned}`} />
            </div>

            <br />
            <p>If <MathJax.Node className='math-jax' inline formula={'5.387 \\ mol'} /> of <MathJax.Node className='math-jax' inline formula={'C_{7}H_{6}O_{3}'} /> reacted,
              then because they have a <MathJax.Node className='math-jax' inline formula={'1:1'} /> ratio, <MathJax.Node className='math-jax' inline formula={'5.387 \\ mol'} /> of <MathJax.Node className='math-jax' inline formula={'C_{4}H_{6}O_{3}'} /> would be needed.
              However, there is only <MathJax.Node className='math-jax' inline formula={'5.144 \\ mol'} /> of <MathJax.Node className='math-jax' inline formula={'C_{4}H_{6}O_{3}'} />, and
              so <MathJax.Node className='math-jax' inline formula={'C_{4}H_{6}O_{3}'} /> is the limiting reagent.</p>
            <br />

            <p>b) What is the maximum mass of Aspirin that can be produced?</p>
            <br />

            <p>The number of <MathJax.Node className='math-jax' inline formula={'moles'} /> of <MathJax.Node className='math-jax' inline formula={'C_{4}H_{6}O_{3}'} /> dictates the amount of product produced because it is the limiting reagent. </p>
            <br />

            <div className="columns">
              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{4}H_{6}O_{3}}&=0.5144 \\ mol \\\\ \\\\
              
              M_{C_{9}H_{8}O_{4}}&=9(12.01)+8(1.01)+4(16.00) \\ \\frac{g}{mol} \\\\
              &=180.17 \\ \\frac{g}{mol} \\\\ \\\\

              m_{C_{9}H_{8}O_{4}}&= \\ ?
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n=\\frac{m}{M} \\\\ \\\\
              m=nM
              \\end{aligned}`} />

              <MathJax.Node className='math-jax' formula={`\\begin{aligned}
              n_{C_{9}H_{8}O_{4}}&=n_{C_{4}H_{6}O_{3}}(\\frac{1 \\ mol \\ C_{9}H_{8}O_{4}}{1 \\ mol \\ C_{4}H_{6}O_{3}}) \\\\ \\\\
              &=0.5144 \\ mol \\ C_{4}H_{6}O_{3}(\\frac{1 \\ mol \\ C_{9}H_{8}O_{4}}{1 \\ mol \\ C_{4}H_{6}O_{3}}) \\\\ \\\\
              n_{C_{9}H_{8}O_{4}}&=0.5144 \\ mol \\\\ \\\\ \\\\
              
              m_{C_{9}H_{8}O_{4}}&=n_{C_{9}H_{8}O_{4}}M_{C_{9}H_{8}O_{4}} \\\\ \\\\
              &=0.5144 \\ mol(180.17 \\ \\frac{g}{mol}) \\\\ \\\\
              m_{C_{9}H_{8}O_{4}}&=92.68 \\ g
              \\end{aligned}`} />
            </div>

          </div>




        </div>
      </div>
    </MathJax.Provider>
  );
}
