import ParticlesBackground from "@/components/ParticlesBackground";
import styles from "@/styles/partA.module.css";
import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function section1() {
  const inlineFormula = "\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta";
  const blockFormula = `\\frac{n!}{k!(n-k)!} = \\binom{4ggggggggg} \ {5\\ g/mol}`;
  return (
    
    <MathJax.Provider>
      <ParticlesBackground/>
      <Navbar title="Part A - Test Corrections"/>
      <div className={styles.pageContainer}>
        <div className={styles.mainContainer}>
          <h2 className={styles.test}>Test 1</h2>
          <div>

            {/* problem 1*/}
            <h3>Section III, Question 3</h3>
            <p><b>Determine how many atoms of <MathJax.Node inline formula={"H"} /> are in one mouthful of water if the average mouth can hold <MathJax.Node inline formula={"84.2 \\ g"} /> of water.</b></p>
            <p>I mistakenly assumed that <MathJax.Node inline formula={"84.2 \\ g"}/> was the mass of <MathJax.Node inline formula={"H"}/>, when it is actually the mass of <MathJax.Node inline formula={"H_{2}O"}/>. Corrected solution:</p>
            
            <div className={styles.columns}>
              <p>
               <MathJax.Node formula={"m_{H_{2}O}=84.2 \\ g"} />
                <MathJax.Node formula={"M_{H_{2}O}=18.02 \\ \\frac{g}{mol}"} />
                <MathJax.Node formula={"N_{A}=\\frac{6.02 \\times 10^{23}}{mol}"} />
                <MathJax.Node formula={"N_{H}= \\ ?"} />
              </p>

              <p>
                <MathJax.Node formula={"n=\\frac{m}{M}"} />
                <MathJax.Node formula={"N=n \\times N_{A}"} />
                <MathJax.Node formula={"N=\\frac{m}{M} \\times N_{A}"} />
              </p>

          
              <div>
              
                <MathJax.Node formula={"N_{H_{2}O}=\\frac{m_{H_{2}O}}{M_{H_{2}O}}(N_{A})"} />
                <MathJax.Node formula={"=\\frac{84.2 \\  g}{1.01 \\ \\frac{g}{mol}}(\\frac{6.02  \\times 10^{23} \\ molecules}{mol})"} />
                <MathJax.Node formula={"=\\frac{84.2 \\ mol(6.02 \\times 10^{23} \\ molecules)}{1.01 \\ mol}"} />
                <MathJax.Node formula={"=\\frac{84.2(6.02 \\times 10^{23})}{1.01} \\ molecules"}/>
                <MathJax.Node formula={"=502 \\times 10^{23} \\ molecules"}/>
                <MathJax.Node formula={"N_{H_{2}O}=5.02 \\times 10^{25} \\ molecules"}/>
                <MathJax.Node formula={""}/>
                <MathJax.Node formula={"N_{H}=N_{H_{2}O} (\\frac{2 \\ H \\ atoms}{1 \\ H_{2}O \\ molecule})"}/>
                <MathJax.Node formula={"=5.02 \\times 10^{25} \\ H_{2}O \\ molecules \\times \\frac{2 \\ H \\ atoms}{1 \\ H_{2}O \\ molecule}"}/>
                <MathJax.Node formula={"=10.04 \\times 10^{25} \\ atoms"}/>
                <MathJax.Node formula={"N_{H}=1.00 \\times 10^{26} \\ atoms"}/>
              </div>        
            </div>

            {/* problem 2*/}
            <h3>Section III, Question 6</h3>
            <p>A <b>combustion analysis</b> is performed on <b>methanesulphonyl</b>, a sulphur containing organic compound.</p>
            <p><MathJax.Node inline formula={'1.22 \\ g'}/> of it is combusted and the products are <MathJax.Node inline formula={'1.12 \\ g'}/> of <MathJax.Node inline formula={'CO_{2}'}/>
            , <MathJax.Node inline formula={'0.687 \\ g'}/> of water and <MathJax.Node inline formula={'0.81 \\ g'}/> of sulphur dioxide. Determine the <b>empirical formula.</b></p>
            <br/>
            <p>I didn't calculate the mass and numbers of moles of <MathJax.Node inline formula={'O'}/>, which I was supposed to incorporate into the empirical formula. Corrected solution:</p>
            <div className={styles.columnsCentered}>
              <div>
                <MathJax.Node formula={'m_{methanesulphonyl}=1.22 \\ g'}/>
                <MathJax.Node formula={'m_{CO_{2}}=1.12 \\ g'}/>
                <MathJax.Node formula={'m_{H_{2}O}=0.687 \\ g'}/>
                <MathJax.Node formula={'m_{SO_{2}}=0.81 \\ g'}/>
                <MathJax.Node formula={'EF= \\ ?'}/>
              </div>

              <div>
                <MathJax.Node formula={'n=\\frac{m}{M}'}/>
              </div>
            </div>

            <br/>
            <br/>

            <div className={styles.columns}>
              {/* Carbon*/}
              <div className={styles.borderRight}>
                <MathJax.Node formula={'m_{C}=m_{CO_{2}}(\\frac{M_{C}}{M_{CO_{2}}})'}/>
                <MathJax.Node formula={'=1.12 \\ g(\\frac{12.01 \\frac{g}{mol}}{44.01 \\frac{g}{mol}})'}/>
                <MathJax.Node formula={'m_{C}=0.306 \\ g'}/>
                <br/>
                <MathJax.Node formula={'n_{C}=\\frac{m_{C}}{M_{C}}'}/>
                <MathJax.Node formula={'=\\frac{0.306 \\ g}{12.01 \\ \\frac{g}{mol}}'}/>
                <MathJax.Node formula={'n_{C}=0.0255 \\ mol'}/>
              </div>
              
              {/* Hydrogen*/}
              <div className={styles.borderRight}>
                <MathJax.Node formula={'m_{H}=m_{H_{2}O}(\\frac{2(M_{H})}{M_{H_{2}O}})'}/>
                <MathJax.Node formula={'=0.687 \\ g(\\frac{2.02 \\frac{g}{mol}}{18.02 \\frac{g}{mol}})'}/>
                <MathJax.Node formula={'m_{H}=0.0770 \\ g'}/>
                <br/>
                <MathJax.Node formula={'n_{H}=\\frac{2(m_{H})}{M_{H}}'}/>
                <MathJax.Node formula={'=\\frac{0.0770 \\ g}{1.01 \\ \\frac{g}{mol}}'}/>
                <MathJax.Node formula={'n_{H}=0.0762 \\ mol'}/>
              </div>
              
              {/* Silicon*/}
              <div className={styles.borderRight}>
                <MathJax.Node formula={'m_{S}=m_{SO_{2}}(\\frac{M_{S}}{M_{SO_{2}}})'}/>
                <MathJax.Node formula={'=0.81 \\ g(\\frac{32.07 \\frac{g}{mol}}{64.07 \\frac{g}{mol}})'}/>
                <MathJax.Node formula={'m_{S}=0.405 \\ g'}/>
                <br/>
                <MathJax.Node formula={'n_{S}=\\frac{m_{S}}{M_{S}}'}/>
                <MathJax.Node formula={'=\\frac{0.405 \\ g}{32.07 \\ \\frac{g}{mol}}'}/>
                <MathJax.Node formula={'n_{S}=0.0126 \\ mol'}/>
              </div>

            {/* Oxygen*/}
              <div>
                <MathJax.Node formula={'m_{O}=m_{methanesulphonyl}-(m_{C}+m_{H}+m_{S})'}/>
                <MathJax.Node formula={'=1.22 \\ g-(0.306 \\ g + 0.0770 \\ g + 0.405 \\ g)'}/>
                <MathJax.Node formula={'m_{O}=0.43 \\ g'}/>
                <br/>
                <MathJax.Node formula={'n_{O}=\\frac{m_{O}}{M_{O}}'}/>
                <MathJax.Node formula={'=\\frac{0.43 \\ g}{16.00 \\ \\frac{g}{mol}}'}/>
                <MathJax.Node formula={'n_{O}=0.027 \\ mol'}/>
              </div>
            </div>

            <br/>
            <MathJax.Node formula={'n_{C}:n_{H}:n_{S}:n_{O}=\\frac{0.0255 \\ mol:0.0762 \\ mol:0.0126 \\ mol:0.027 \\ mol}{0.0126 \\ mol}'}/>
            <MathJax.Node formula={'=2:6:1:2'}/>
            <MathJax.Node formula={'\\therefore \\ EF=C_{2}H_{6}SO_{2}'}/>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
