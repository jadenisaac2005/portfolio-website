import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@jadenisaac2005",
    icon: Icons.gitHub,
    link: "https://github.com/jadenisaac2005",
  },
  {
    name: "LinkedIn",
    username: "Jaden Isaac",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/jaden-isaac",
  },
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "jadenisaac10",
    icon: Icons.gmail,
    link: "mailto:jadenisaac10@gmail.com",
  },
];
