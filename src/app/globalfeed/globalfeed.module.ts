import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalfeedComponent } from './components/globalfeed/globalfeed.component';
import { GlobalfeedRoutingModule } from './globalfeed-routing.module';
import { FeedComponent } from '../shared/components/feed/feed.component';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [
    GlobalfeedComponent,
    FeedComponent,
    BannerComponent,
    LoadingComponent,
    PaginationComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    GlobalfeedRoutingModule
  ]
})
export class GlobalfeedModule { }
