// File: src/pages/api/servers.ts
import type { APIRoute } from 'astro';
import { serverCard, type ServerCard } from "../../data/ServerCard";

interface PopulationData {
  [key: string]: number;
  last_updated: number;
}

interface ServerInfo {
  schedule_type: string;
  schedule: string;
  next_wipe: string;
  last_wipe: string;
  status: string;
  countdown: string;
}

interface WipeData {
  last_updated: number;
  servers: {
    [key: string]: ServerInfo;
  };
  timestamp: string;
}

interface CombinedServerData {
  [key: string]: {
    population: number;
    wipeInfo: ServerInfo | null;
    cardInfo: ServerCard;
  };
}

function normalizeServerName(name: string): string {
  return name.toLowerCase().replace("us-", "");
}

export const GET: APIRoute = async ({ request }) => {
  try {
    // Fetch data from both APIs
    const [popResponse, wipeResponse] = await Promise.all([
      fetch("https://api.mainloot.com/pop"),
      fetch("https://api.mainloot.com/wipe"),
    ]);

    const popData: PopulationData = await popResponse.json();
    const wipeData: WipeData = await wipeResponse.json();

    // Create a map of normalized server names to ServerCard data
    const serverCardMap = new Map(
      serverCard.map((card) => [normalizeServerName(card.title), card])
    );

    // Combine the data
    const combinedData: CombinedServerData = {};

    for (const [server, population] of Object.entries(popData)) {
      if (server !== "last_updated") {
        const normalizedKey = normalizeServerName(server);
        const cardInfo = serverCardMap.get(normalizedKey);
        
        if (cardInfo) {
          combinedData[`us-${normalizedKey}`] = {
            population: typeof population === 'number' ? population : parseInt(String(population), 10) || 0,
            wipeInfo: wipeData.servers[server] || null,
            cardInfo,
          };
        }
      }
    }

    // Add any servers from wipeData that aren't in popData
    for (const server of Object.keys(wipeData.servers)) {
      const normalizedKey = normalizeServerName(server);
      const cardInfo = serverCardMap.get(normalizedKey);
      if (!combinedData[`us-${normalizedKey}`] && cardInfo) {
        combinedData[`us-${normalizedKey}`] = {
          population: 0,
          wipeInfo: wipeData.servers[server],
          cardInfo,
        };
      }
    }

    return new Response(JSON.stringify(combinedData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch server data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
