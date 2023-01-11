import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";
import { Configuration, OpenAIApi } from "openai";
@Injectable({
    providedIn: 'root',
})
export class ChatGPTService {


    private openai?: OpenAIApi;
    private apiKey?: string;

    public GetOpenAI(): OpenAIApi {
        if(this.openai)
            return this.openai;

        const configuration = new Configuration({
            apiKey: this.apiKey,
        });
        this.openai = new OpenAIApi(configuration);
        return this.openai;
    }

    constructor(private http: HttpClient) {

        const apiKey = localStorage.getItem('openai_api_key');

        if (apiKey) {
            this.apiKey = apiKey;
        }
    }

    public changeApiKey(apiKey: string) {
        this.apiKey = apiKey;
        localStorage.setItem('openai_api_key', apiKey);
    }

    public IsAPIKey(): boolean {
        return this.apiKey !== undefined && this.apiKey !== null && this.apiKey !== "";
    }

    //COMPLETION




}