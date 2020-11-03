import { Player } from './structures/Player.ts';

export class Stats {
    private readonly apiKey: string;
    constructor(options: { apiKey: string } ) {
        this.apiKey = options.apiKey;
    }

    /**
     * Fetch a player
     * @param identifier {string} The user's handle on Steam, ie. a Steam ID, Steam Community URL or Steam Vanity Username
     * @returns {Player | null} Either the user if exists, otherwise null
     */
    public fetchPlayer = async (identifier: string): Promise<Player | null> => {
        const res = await fetch(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${identifier}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "TRN-Api-Key": this.apiKey
            }
        });
        const json = await res.json();
        if (json.errors == null) {
            return new Player(json.data);
        }
        return null;
    };

}