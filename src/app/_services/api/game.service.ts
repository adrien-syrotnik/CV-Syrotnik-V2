import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root',
})
export class GameService {

    constructor(private http: HttpClient) {

    }

    /**
     * Get all existing games
     * @returns 
     */
    getGames(params? : {limit?: number, offset?: number}) {
        return this.http.get(environment.apiUrl + '/game',{
            params
        });
    }

    /**
     * Get game info from url name
     * @param urlName 
     * @returns 
     */
    getGameFromUrlName(urlName: string) {
        return this.http.get(environment.apiUrl + '/game' + '/' + urlName);
    }

    /**
     * Get game scores
     * @param gameId 
     * @returns 
     */
    getGameCategoryScores(gameId: string, category_id:string, params? : {limit?: number, offset?: number}) {
        return this.http.get(environment.apiUrl + '/game/' + gameId + '/scores/' + category_id, {
            params
        });
    }

    /**
     * Get game categories
     * @param gameId 
     * @returns 
     */
    getGamesCategories(gameId: string) {
        return this.http.get(environment.apiUrl + '/game/' + gameId + '/categories');
    }

    /**
     * Get game stats
     * @param gameId 
     * @returns 
     */
     getGameStats(gameId: string) {
        return this.http.get(environment.apiUrl + '/game/' + gameId + '/stats');
    }

    /**
     * Add game score
     * @param gameId 
     * @param score 
     * @param pseudo 
     * @returns 
     */
    addGameScore(gameId:string, data : {image?:any, video?:any, pseudo:string, score:string, link?:string, desc?:string, category_id:string}) {

        let formData:FormData = new FormData();
        // if(data.image)
        //     formData.append('image', data.image);
        // if(data.video)
        //     formData.append('video', data.video);

        // formData.append('pseudo', 'AdrienS');

        for(let [key,value] of Object.entries(data)) {
            
            formData.append(key, value);

        }

        console.log(formData)
        // let headers = new Headers();
        // /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');

        return this.http.post(environment.apiUrl + '/game/' + gameId + '/scores', formData);
    }




}