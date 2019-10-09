import { Component, OnInit } from '@angular/core';
import { ConfigService  } from "./config.service";

import { Config } from 'protractor';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Config;
  constructor(private configService: ConfigService) { }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['name'],
          textfile:  data['college']
      });
  }
  ngOnInit() {
  }

}
