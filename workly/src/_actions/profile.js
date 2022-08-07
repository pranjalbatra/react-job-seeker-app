import { profileConstants } from '../_constants/profile'
export const profileActions = {
    getCandidate,
}

function getCandidate() {
    return {
        type: profileConstants.GET_CANDIDATE_SUCCESS, response: {
            "profilePic": "https://avatars1.githubusercontent.com/u/2954663?s=460&v=4",
            "name": "Utkarsh Mehrotra",
            "username": "utkarsh",
            "role": "Product Manager",
            "phone": "999999999",
            "email": "ut.mehrotra@gmail.com",
            "tags": [
                "GRAPHIC DESIGNER", "UI UX EXPERT "
            ],
            "achievements": [
                {
                    "field": "UI-UX",
                    "level": 4,
                    "img": ""
                }
            ],
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,",
            "videoDescription": "",
            "jobProfile": "Chief",
            "location": "New Delhi",
            "story": {
                "video": "https://www.w3schools.com/html/mov_bbb.mp4",
                "image": "https://avatars1.githubusercontent.com/u/2954663?s=460&v=4",
                "jobProfile": "Chief",
                "location": "New Delhi"
            },
            "reviews": [
                {
                    "image": "https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-750-563.jpg",
                    "companyName": "company name",
                    "location": "TOronto, Canada",
                    "review": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo"

                }
            ]

        }

    }
};