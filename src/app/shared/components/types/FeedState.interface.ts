import { GetFeedResponseInterface } from "./getFeedResponse.interface"

export interface FeedState {
    isloading : boolean
    error : string | null
    data : GetFeedResponseInterface | null
}