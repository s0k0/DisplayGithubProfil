import { get } from '../utils/request'
import { setBusy, storeResults} from "./actions";

export const searchActionCreator = (userName) => {
    return dispatch => {
        dispatch(setBusy(true));
        return  get(`https://github-user.now.sh?username=${userName}`)
            .then(data => {
                dispatch(setBusy(false));
                dispatch(storeResults(data.data));
                return data;
            })
    }
};
