import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from '../../types/Article.interface';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

export const FeedActions = createActionGroup({
  source: 'Feed',

  events: {
    'Get feed': props<{url: string}>(),
    'Get feed success': props<{feed: GetFeedResponseInterface}>(),
    'Get feed failure': emptyProps(),
  },
});
