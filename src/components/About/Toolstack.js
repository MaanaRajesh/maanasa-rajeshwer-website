import React from "react";
import { StackSection } from "./Techstack";

import vscodePng from "../../Assets/TechIcons/vscode.png";
import gitPng    from "../../Assets/TechIcons/gitpng.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng  from "../../Assets/TechIcons/condapng.png";
import sshPng    from "../../Assets/TechIcons/ssh.png";

const ITEMS = [
  { label: "VS Code", src: vscodePng },
  { label: "Git",     src: gitPng    },
  { label: "GitHub",  src: githubPng },
  { label: "Conda",   src: condaPng  },
  { label: "SSH",     src: sshPng    },
];

function Toolstack() {
  return <StackSection items={ITEMS} paddingBottom="40px" rowClassName="stack-grid-tight" colLg={1} />;
}

export default Toolstack;
