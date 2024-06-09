import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FeedServiceService } from "../feed.service.service";
import { FeedActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";

@Injectable()
export class FeedEffect {
    constructor(
        private actions$: Actions,
        private feedService: FeedServiceService 
    ) {}

    feed$ = createEffect(() => 
        this.actions$.pipe(
            ofType(FeedActions.getFeed),
            switchMap(({url}) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return FeedActions.getFeedSuccess({feed})
                      }),
                      catchError(() => {
                        return of(FeedActions.getFeedFailure())
                      })
                )
              })
        )
        

    );
    
}
