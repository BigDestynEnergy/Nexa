import "../Styles/Landing Page.css";
import {
  LuRocket,
  LuMapPin,
  LuArrowUpRight,
  LuUsers,
  LuChartBar,
  LuImage,
  LuShare2,
  LuMousePointerClick,
  LuGlobe,
} from "react-icons/lu";

export const howItWorks = [
  {
    number: "01",
    icon: <LuGlobe />,
    title: "Create your Nexa profile",
    description:
      "Choose a unique profile name and add your business, brand, group or community information.",
  },
  {
    number: "02",
    icon: <LuImage />,
    title: "Tell people about yourself",
    description:
      "Add your location, services, mission, bio, photos and important links so people can understand what you do.",
  },
  {
    number: "03",
    icon: <LuShare2 />,
    title: "Share your profile",
    description:
      "Your profile gets a simple link such as nexa/profiles/your-business-name that you can share anywhere.",
  },
  {
    number: "04",
    icon: <LuChartBar />,
    title: "Monitor your audience",
    description:
      "The account owner and up to two secondary users can access a dashboard to monitor views and interactions.",
  },
];