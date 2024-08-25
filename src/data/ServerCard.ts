import peaceImage from "../img/ServerSection/peace.png";
import loveImage from "../img/ServerSection/love.jpg";
import warImage from "../img/ServerSection/war.jpg";
import vanillaImage from "../img/ServerSection/vanilla.jpg";

export interface ServerCard {
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  icon: string;
  color: string;
  scheduledWipe: string,
}

export const serverCard: ServerCard[] = [
  {
    title: "PEACE",
    description: "You will live in peace during the week doing PVE with events and raidable bases, on Friday evening the PVP switch gets flipped",
    imageSrc: peaceImage,
    icon: "mdi:peace",
    color: "purple",
    scheduledWipe: "Monthly (Mon/Thurs 11AM PST)",
  },
  {
    title: "LOVE",
    description: "A 2X monthly modded experience with a focus on quality of life without deviating too far from Rust core mechanics.",
    imageSrc: loveImage,
    icon: "mdi:heart",
    color: "red",
    scheduledWipe: "Monthly (Thurs 11AM PST)",
  },
  {
    title: "WAR",
    description: "A one million x battlefield server with a focus on PVP, loot is meaningless here. We offer loadouts and a variety of kits.",
    imageSrc: warImage,
    icon: "mdi:bullets",
    color: "orange",
    scheduledWipe: "Biweekly (Mon/Thurs 11AM PST)",
  },
  {
    title: "VANILLA",
    description: "The vanilla experience for the purest of rust players. Currently running on a weekly schedule wiping on once a week.",
    imageSrc: vanillaImage,
    icon: "mdi:ice-cream",
    color: "NavajoWhite",
    scheduledWipe: "Weekly (Thurs 11AM PST)",
  },
];