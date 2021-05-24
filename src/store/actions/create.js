import { CREATE_QUIZ_ACTION, RESET_QUIZ_CREATION } from "./actionTypes";
import axios from '../../components/AxiosQuiz/AxiosQuiz'

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_ACTION,
        item 
    }
}

export function resetQuizAction() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizAction())
    }
}