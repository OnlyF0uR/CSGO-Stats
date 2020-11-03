# CSGO Stats
A simple wrapper for the CSGO API from TNR.

### Getting started
1. Create an app on [tracker.gg](https://tracker.gg/developers/docs/getting-started)
2. Fill in all the required information.
3. Copy the api key.

You can now follow the example below.

### Example
```ts
import { Stats, Player, Playtime } from 'https://deno.land/x/csgo_stats@v1.1.0/mod.ts';

const stats: Stats = new Stats({
    apiKey: 'api-key'
});

const player: Player | null = await stats.fetchPlayer('some-player-id');
if (player == null) {
    console.log('No data found');
} else {
    console.log(player.kills);
    console.log(player.deaths);
    // Etc.

    const playtime: Playtime = player.getPlayedTime();
    console.log(playtime.getDays(), playtime.getHours(), playtime.getMinutes(), playtime.getSeconds());
}
```