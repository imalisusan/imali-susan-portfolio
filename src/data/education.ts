import type { Education } from "@/types/portfolio";
import emobilisLogo from "@/assets/logos/emobilis.jpg";
import maryhillLogo from "@/assets/logos/maryhill.png";
import strathmoreLogo from "@/assets/logos/strathmore.png";

export const education: Education[] = [
  {
    school: "Strathmore University",
    qualification: "BSc in Informatics and Computer Science",
    dates: "2019 — 2022",
    logo: strathmoreLogo,
  },
  {
    school: "eMobilis Mobile Institute",
    qualification: "Web Designing and Mobile Application Development",
    dates: "2018",
    logo: emobilisLogo,
  },
  {
    school: "MaryHill Girls High School",
    qualification: "Kenya Certificate of Secondary Education (K.C.S.E)",
    dates: "2014 — 2018",
    logo: maryhillLogo,
  },
];
