import { Component, OnInit } from '@angular/core';

import { Page } from '../pagedefine/pagedefine.component';

export const PAGES: Page[] = [
  { name: 'WOODSCREATIVE', route: "/main/mywork/woods" },
  { name: 'NITEA', route: "/main/mywork/nitea" },
  { name: 'MELI MAYA', route: "/main/mywork/melimaya" },
  { name: 'ESCAPEPLAN', route: "/main/mywork/escapeplan" },
  { name: 'DISNEY PRINCESS', route: "/main/mywork/disneyprincess" },
  { name: 'OLD PORTFOLIO', route: "/main/mywork/oldportfolio" },
  { name: 'OTHER WORK', route: "/main/mywork/otherwork" }
];
