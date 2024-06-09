import { createFeature, createReducer, on } from "@ngrx/store";
import { RouterNavigationAction, routerNavigatedAction } from "@ngrx/router-store";
import { FeedState } from "../types/FeedState.interface";
import { FeedActions } from "./actions";
import { state } from "@angular/animations";

const initialState : FeedState = {
    isloading : false,
    error : null,
    data : null
}



const feadfeature = createFeature({
    name : 'feed',
    reducer : createReducer(
        initialState,
        on(FeedActions.getFeed , (state) => ({...state, isloading : true})),
        on(FeedActions.getFeedSuccess , (state, action) => ({...state, isloading : false, data : action.feed})),
        on(FeedActions.getFeedFailure , (state, action) => ({...state, isloading : false})),
        on(routerNavigatedAction, () => initialState)
    )


})




export const {
    name : feedFeatureKey,
    reducer : feedReducer,
    selectIsloading,
    selectError,
    selectData : selectFeedData
} = feadfeature;