import MathJax from "react-mathjax";

function MathJaxInline(text) {
  return <MathJax.Node inline formula={inlineFormula} />;
}

export default MathJaxInline;
