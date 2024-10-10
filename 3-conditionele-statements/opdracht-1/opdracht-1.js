let tijd;
function groet(tijd) {
  if (tijd <= 12) {
    return "Goedemorgen";
  } else if (tijd <= 18) {
    return "Goedemiddag";
  } else if (tijd >= 18) return "Goedeavond";
}

console.log(groet(21));
