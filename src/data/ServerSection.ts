import peaceImage from "../img/ServerSection/peace.png";
import loveImage from "../img/ServerSection/love.jpg";
import warImage from "../img/ServerSection/war.jpg";
import vanillaImage from "../img/ServerSection/vanilla.jpg";

export interface ServerSection {
    id: string;
    title: string;
    description: string;
    imageSrc: ImageMetadata;  // Change this to ImageMetadata
    icon: string;
    color: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
    connectString: string;
}

export const serverSection: ServerSection[] = [
  {
    id: "peace",
    title: "PEACE",
    description: "A server experiment based on feedback from the community",
    imageSrc: peaceImage,
    icon: "mdi:peace",
    color: "purple",
    features: [
      {
        icon: "mdi:dice-5",
        title: "5X Server, Monthly",
        description: "You have ample resources available to you at all time. This allows you to focus on fortifying your base and preparing for PVP mode.",
      },
      {
        icon: "mdi:calendar-heart",
        title: "PVE Weekdays, PVP Weekends",
        description: "Live in peace during the week (SUN 11AM, FRI 11AM PST), on Friday evening the PVP switch gets flipped. Will you be a defender, a raider or both?",
      },
      {
        icon: "mdi:house-group-add",
        title: "Raidable Bases & Events",
        description: "During PVE hours, you will have access to raidable bases and different events if you're looking to make an offensive play.",
      },
      {
        icon: "mdi:shopping-favorite",
        title: "Rewards, Shop, Stats, & Kits",
        description: "We try our best to offer a unique and integrated experience. We have a rewards system, a shop, stats, and kits.",
      },
    ],
    connectString: "connect peace.mainloot.com",
  },
  {
    id: "love",
    title: "LOVE",
    description: "A modified 2X monthly experience with a focus on quality of life without deviating too far from Rust core mechanics.",
    imageSrc: loveImage,
    icon: "mdi:heart",
    color: "red",
    features: [
      {
        icon: "mdi:dice-2",
        title: "2X Monthly",
        description: "This is the root of mainloot, this is the server we built first and the one we would want to play on if we were not admins.",
      },
      {
        icon: "mdi:git",
        title: "Modded",
        description: "We have modded quite a few elements to align with the idea of 2X. Gather rates to stack sizes have been modified, along with timers for smelting, crafting, and more.",
      },
      {
        icon: "mdi:quality-high",
        title: "High Quality of Life",
        description: "We have quite a few quality of life mods installed for your enjoyment. This includes skinner, remove, teleport, home, bgrade, base upgrade, and more.",
      },
      {
        icon: "mdi:prize",
        title: "Rewards, Shop, Stats, & Kits",
        description: "We have a rewards system, a shop, stats, and kits. We also offer the ability to sell items in the shop and earn rewards from discord activity.",
      },
    ],
    connectString: "connect love.mainloot.com",
  },
  {
    id: "war",
    title: "WAR",
    description: "PVP is the name of the game here, the mainloot rendition of a battlefield server.",
    imageSrc: warImage,
    icon: "mdi:bullets",
    color: "orange",
    features: [
      {
        icon: "mdi:infinity-box",
        title: "Infinity",
        description: "You're not going to have to worry about resources here, you'll have access to an abundance of just about everything including the completely free in-game store.",
      },
      {
        icon: "mdi:speedometer",
        title: "Fast",
        description: "Because you're loaded, things move quickly. No BPS, T3 everywhere. Expect PVPs at all times. If you're not doing the raiding expect to be raided.",
      },
      {
        icon: "mdi:bag-personal-tag",
        title: "Unlootable & Loadouts",
        description: "Create a loadout that sets you up for success with every engagement coupled with an unlootable backpack.",
      },
      {
        icon: "mdi:graph-areaspline",
        title: "Shop, Stats, & Kits",
        description: "We provide a bunch of different kits with short cooldowns along with shop and stats.",
      },
    ],
    connectString: "connect war.mainloot.com",
  },
  {
    id: "vanilla",
    title: "VANILLA",
    description: "Vanilla is anything but basic, easily the most complex and challenging server in the mainloot family.",
    imageSrc: vanillaImage,
    icon: "mdi:ice-cream",
    color: "tan",
    features: [
      {
        icon: "mdi:keyboard",
        title: "Classic",
        description: "No modifications. This is how facepunch developers intended the game be played by the broader community.",
      },
      {
        icon: "mdi:map",
        title: "Large Map",
        description: "We use a large map to accommodate more players and provide ample space for building and exploration.",
      },
      {
        icon: "mdi:badge-account",
        title: "Active Staff",
        description: "We do our best to take a proactive role when engaging with the community, this includes responding to tickets and F7 reports.",
      },
      {
        icon: "mdi:server",
        title: "Top notch hardware and network",
        description: "We run out of the Chicago region on Tempest Hosting. We utilize a 10GBPS uplink and run on AMD 7950 CPU's.",
      },
    ],
    connectString: "connect vanilla.mainloot.com",
  },
];