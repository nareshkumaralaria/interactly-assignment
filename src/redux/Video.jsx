export function initalLoading() {
    return {
        type: "0"
    }
}
export function after1Second() {
    return {
        type: "1"
    }
}

export function optionClicked(option) {
    return {
        type: option,
    }
}

const initialState = {
    videoSrc: "https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?",
    videoTitle: "Welcome",
    Loading: true,
    options: "0",
    optionTitle: ""
}

export function videoReducer(state = initialState, action) {
    switch (action.type) {
        case "0":
            return {
                ...state,
            }
        case "1":
            return {
                ...state,
                Loading: false
            }

        case "A":
            return {
                ...state,
                videoSrc: "https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?",
                videoTitle: "Funnel 2: freebie or coaching",
                options: "A",
                optionTitle: 'Download "Campaign Structure Guide"'
            }
        case "B":
            return {
                ...state,
                videoSrc: "https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?",
                videoTitle: "Funnel 3: webinar sign up",
                options: "B",
                optionTitle: 'Sign up for free webinar'
            }
        case "C":
            return {
                ...state,
                videoSrc: "https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?",
                videoTitle: "Funnel 2: freebie or coaching",
                options: "C",
                optionTitle: 'Download "Campaign Structure Guide"'
            }
        default:
            return state
    }
}