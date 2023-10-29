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
            <p>Determine how many atoms of <MathJax.Node inline formula={"H"} /> are in one mouthful of water if the average mouth can hold <MathJax.Node inline formula={"84.2g"} /> of water.</p>
            <div className={styles.columns}>
              <p>
               <MathJax.Node formula={"M_{H}=84.2g"} />

                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
              </p>

              <p>
                <MathJax.Node inline formula={"M_{Fe}=5\frac{g}{mol}"} />
              </p>

          
              <div>
              
                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
                <MathJax.Node formula={"M_{Fe}=5\frac{g}{mol}"} />
                <MathJax.Node formula={"=5g"} />
                <MathJax.Node formula={"=53249324g/mol888"} />
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
