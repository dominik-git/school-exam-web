import { fromJS } from "immutable";
import { createSelector } from "reselect";
import { returnFetchReviewPromise } from "../../services/axiosServices";

const FETCH_REVIEW_SUCCESSFUL = "FETCH_REVIEW_SUCCESSFULLY";
