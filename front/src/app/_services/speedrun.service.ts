import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * Read-only access to the archived speedrun data (static JSON under assets/speedrun).
 * Every response keeps the `{ data: ... }` envelope of the former API.
 */
@Injectable({
    providedIn: 'root',
})
export class SpeedrunService {

    private readonly root = '/assets/speedrun';

    constructor(private http: HttpClient) { }

    getGames() {
        return this.http.get(`${this.root}/games.json`);
    }

    getGameFromUrlName(urlName: string) {
        return this.http.get(`${this.root}/game/${encodeURIComponent(urlName)}.json`);
    }

    getGamesCategories(gameId: string | number) {
        return this.http.get(`${this.root}/game/${gameId}/categories.json`);
    }

    getGameStats(gameId: string | number) {
        return this.http.get(`${this.root}/game/${gameId}/stats.json`);
    }

    getGameCategoryScores(gameId: string | number, categoryId: string | number) {
        return this.http.get(`${this.root}/game/${gameId}/scores/${categoryId}.json`);
    }

    getScore(id: string | number) {
        return this.http.get(`${this.root}/score/${id}.json`);
    }
}
