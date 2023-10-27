import ParticlesBackground from "@/components/ParticlesBackground";
import styles from "@/styles/partA.module.css";
import MathJax from "react-mathjax";


export default function section1() {
  const inlineFormula = "\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta";
  const blockFormula = `\\frac{n!}{k!(n-k)!} = \\binom{4ggggggggg} \ {5\\ g/mol}`;
  return (
    
    <MathJax.Provider>
      <ParticlesBackground/>
      <div className={styles.pageContainer}>
        <div className={styles.mainContainer}>
          <h1>Part A - Test Corrections</h1>
          <div>
            <p>
              adhioawdh iawodawio dawiodhwoiahd iawoh dwioahdouawdhuawoh dawiodh
              awiodh wioah doawidh oawidhioawh doai iawodawio dawiodhwoiahd
              iawoh dwioahdouawdhuawoh dawiodh awiodh wioah doawidh oawidhioawh
              doai iawodawio dawiodhwoiahd iawoh dwioahdouawdhuawoh dawiodh
              awiodh wioah doawidh oawidhioawh doai
            </p>

            <h3>1. How many moles of Fe in 500g?</h3>
            <div className={styles.threeColumns}>
              <p>
                <MathJax.Node inline formula={"m_{Fe}=200g"} />

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
                <MathJax.Node formula={"=53249324g/mol88897089 y87gkh jg yugyu guguog gy goug y o"} />
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
