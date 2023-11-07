import styles from "@/styles/partC.module.css";
import MathJax from "react-mathjax";
import Navbar from "@/components/Navbar";

export default function partC() {
  return (
    <MathJax.Provider>
      <Navbar title="Part C - Final Summative Test" />
      <div className="pageContainer">
        <div className="mainContainer">
          <p>
            <b>
              Type #2 - A SPECT (single photon emission computed tomography)
              scan is a type of imaging technique where a radioactive tracer
              gets injected into a patient’s bloodstream and emits gamma
              radiation, which can be tracked by a computed tomography (CT)
              scanner. This allows doctors to examine blood flow to various
              organs and tissues. SPECT is primarily used to monitor the brain
              and diagnose tumours, stress fractures, and areas of the brain
              with reduced blood flow.
            </b>
          </p>
          <br />
          <p>
            <b>
              Thallium-201 is a common radioactive tracer used in SPECT. The
              half-life of thallium-201 is 72.9 hours. If 13 mg of Thallium-201
              is injected into a patient’s bloodstream, how many particles of
              thallium-201 remain in the patient’s body after 2 weeks?
            </b>
          </p>

          <div className="columns">
            <div>
              <MathJax.Node className='math-jax' formula={'m_{initial}=13 \\ mg'}/>
              <MathJax.Node className='math-jax' formula={'t_{1/2}=72.9 \\ hours'}/>
              <MathJax.Node className='math-jax' formula={'t=2 \\ weeks(\\frac{7 \\ days}{1 \\ week})(\\frac{24 \\ hours}{1 \\ day})'}/>
              <MathJax.Node className='math-jax' formula={'=336 \\ hours'}/>
              <MathJax.Node className='math-jax' formula={'M_{Tl-201}=201 \\ \\frac{g}{mol}'}/>
              <MathJax.Node className='math-jax' formula={'m_{final}=?'}/>



{/*
              <MathJax.Node className='math-jax' formula={'m_{initial}=13 \\ mg(\\frac{1 \\ g}{1000 \\ mg})=1.3(10^{-3}) \\ g'}/>
              <MathJax.Node className='math-jax' formula={'t_{1/2}=72.9 \\ hours'}/>
              <MathJax.Node className='math-jax' formula={'t=2 \\ weeks(\\frac{7 \\ days}{1 \\ week})(\\frac{24 \\ hours}{1 \\ day})'}/>
              <MathJax.Node className='math-jax' formula={'=336 \\ hours'}/>
              */
}
            </div>
            <div>
              <MathJax.Node className='math-jax' formula={''}/>
            </div>
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
}
