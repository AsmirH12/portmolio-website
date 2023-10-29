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
                <MathJax.Node formula={"N_{H_{2}O}=5.02 \\times 10^{25} molecules"}/>
                <MathJax.Node formula={""}/>
                <MathJax.Node formula={"N_{H}=2(N_{H_{2}O}) \\ atoms"}/>
                <MathJax.Node formula={"=10.04 \\times 10^{25} \\ atoms"}/>
                <MathJax.Node formula={"N_{H}=1.00 \\times 10^{26} \\ atoms"}/>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
