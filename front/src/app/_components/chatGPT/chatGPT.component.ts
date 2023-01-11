import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ChatGPTService } from 'src/app/_services/chatgpt.service';


declare var bootstrap: any;

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatGPT.component.html',
  styleUrls: ['./chatGPT.component.scss']
})
export class ChatGPTComponent implements OnInit {

  public question?: string;
  public IsKeyPresent: boolean;
  public key?: string;

  public result?: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private chatGPTService: ChatGPTService,
    public sanitizer: DomSanitizer,
    public translate: TranslateService) {

    this.IsKeyPresent = this.chatGPTService.IsAPIKey()

  }

  public sendQuestion() {
    if (this.question) {
      this.chatGPTService.GetOpenAI().createCompletion({
        prompt: this.question,
        model: "text-davinci-003",
        max_tokens: 100,
        temperature: 0.9,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0}).then((response) => {
          console.log(response.data.choices[0].text);
          this.result = response.data.choices[0].text;
        }).catch((error) => {
          console.log(error);
          this.result = JSON.stringify(error);
        });
    }
  }

  public sendKey() {
    this.chatGPTService.changeApiKey(this.key!);
    this.IsKeyPresent = this.chatGPTService.IsAPIKey();
  }

  public logout() {
    this.chatGPTService.changeApiKey("");
    this.IsKeyPresent = this.chatGPTService.IsAPIKey();
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/'], { fragment: 'projects' });
  }

}
