export class Playtime {

    private readonly seconds: number;

    constructor(seconds: number) {
        this.seconds = seconds;
    }

    /**
     * Get the amount of playtime in days
     * @returns {number}
     */
    public getDays(): number {
        return Math.floor(this.seconds / (3600*24));
    }

    /**
     * Get the amount of playtime in hours (Minus days)
     * @returns {number}
     */
    public getHours(): number {
        return Math.floor(this.seconds % (3600*24) / 3600);
    }

    /**
     * Get the amount of playtime in minutes (Minus days, hours)
     * @returns {number}
     */
    public getMinutes(): number {
        return Math.floor(this.seconds % 3600 / 60);
    }

    /**
     * Get the amount of playtime in seconds (Minus days, hours, minutes)
     * @returns {number}
     */
    public getSeconds(): number {
        return Math.floor(this.seconds % 60);
    }
}