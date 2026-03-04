import React from "react";
import { StackSection } from "./Techstack";

import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import vscodePng from "../../Assets/TechIcons/vscode.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";

const ITEMS = [
  { label: "Ubuntu", src: ubuntuPng },
  { label: "VS Code", src: vscodePng },
  { label: "GitHub", src: githubPng },
  { label: "Conda", src: condaPng },
  { label: "SSH", src: sshPng },
];

function Toolstack() {
  return <StackSection items={ITEMS} paddingBottom="40px" />;
}

export default Toolstack;
