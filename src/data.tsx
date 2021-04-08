// icons
import supervisorIcon from "./images/icon-supervisor.svg";
import teamBuilderIcon from "./images/icon-team-builder.svg";
import karmaIcon from "./images/icon-karma.svg";
import calculatorIcon from "./images/icon-calculator.svg";

// data
const data = {
  title: "Reliable, efficient delivery",
  tagLine: "Powered by Technology",
  leadingMessage:
    "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",

  cards: [
    {
      title: "Supervisor",
      message: "Monitors activity to identify project roadblocks",
      icon: supervisorIcon,
      alt: "Inpecting eye",
    },
    {
      title: "Team Builder",
      message:
        "Scans our talent network to create the optimal team for your project",
      icon: teamBuilderIcon,
      alt: "Red house in a web page",
    },
    {
      title: "Karma",
      message: "Regularly evaluates our talent to ensure quality",
      icon: karmaIcon,
      alt: "a power on light bult",
    },
    {
      title: "Calculator",
      message:
        "Uses data from past projects to provide better delivery estimates",
      icon: calculatorIcon,
      alt: "computer showing graphs",
    },
  ],
};

export default data;
