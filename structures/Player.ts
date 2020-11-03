import { Playtime } from './Playtime.ts';

export class Player {

    public kills: number;
    public deaths: number;
    public kdRatio: number;
    public damage: number;
    public headshots: number;
    public shotsFired: number;
    public shotsHit: number;
    public accuracy: number;
    public headshotPercentage: number;
    public bombsPlanted: number;
    public bombsDefused: number;
    public hostagesRescued: number;
    public moneyEarned: number;
    public mvps: number;
    public matchesPlayed: number;
    public matchWins: number;
    public matchLosses: number;
    public matchTies: number;
    public matchWinPercentage: number;
    public roundsPlayed: number;
    public roundWins: number;
    public roundLosses: number;
    public roundWinPercentage: number;

    private readonly playtime: number;

    constructor(data: any) {
        // Public properties
        this.kills = data.segments[0].stats.kills.value;
        this.deaths = data.segments[0].stats.deaths.value;
        this.kdRatio = this.kills / this.deaths;
        this.damage = data.segments[0].stats.damage.value;
        this.headshots = data.segments[0].stats.headshots.value;
        this.shotsFired = data.segments[0].stats.shotsFired.value;
        this.shotsHit = data.segments[0].stats.shotsHit.value;
        this.accuracy = data.segments[0].stats.shotsAccuracy.value;
        this.headshotPercentage = data.segments[0].stats.headshotPct.value;
        this.bombsPlanted = data.segments[0].stats.bombsPlanted.value;
        this.bombsDefused = data.segments[0].stats.bombsDefused.value;
        this.hostagesRescued = data.segments[0].stats.hostagesRescued.value;
        this.moneyEarned = data.segments[0].stats.moneyEarned.value;
        this.mvps = data.segments[0].stats.mvp.value;
        this.matchesPlayed = data.segments[0].stats.matchesPlayed.value;
        this.matchWins = data.segments[0].stats.wins.value;
        this.matchLosses = data.segments[0].stats.losses.value;
        this.matchTies = data.segments[0].stats.ties.value;
        this.matchWinPercentage = this.matchesPlayed / this.matchWins;
        this.roundsPlayed = data.segments[0].stats.roundsPlayed.value;
        this.roundWins = data.segments[0].stats.roundsWon.value;
        this.roundLosses = this.roundsPlayed - this.roundWins;
        this.roundWinPercentage = this.roundsPlayed / this.roundWins;

        // Private properties
        this.playtime = data.segments[0].stats.timePlayed.value;
    }

    /**
     * Get the player's playtime
     * @returns {Playtime}
     */
    public getPlayedTime(): Playtime {
        return new Playtime(this.playtime);
    }

}