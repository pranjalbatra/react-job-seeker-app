import { searchConstants } from '../_constants/search'

export const searchActions = {
    getList
};

function getList({ page }) {
    return {
        type: searchConstants.GET_LIST_SUCCESS, response: {
            "results": [
                {
                    "profilePic": "https://avatars1.githubusercontent.com/u/2954663?s=460&v=4",
                    "name": "Utkarsh Mehrotra",
                    "username": "utkarsh",
                    "role": "Product Manager",
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
                    "videoDescription": ""

                },
                {
                    "profilePic": "https://avatars1.githubusercontent.com/u/2954663?s=460&v=4",
                    "name": "Utkarsh Mehrotra",
                    "username": "utkarsh1",
                    "role": "Product Manager",
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
                    "videoDescription": ""

                }
            ],
            "stories": [
                {
                    "name": "Utkarsh",
                    "image": "https://avatars1.githubusercontent.com/u/2954663?s=460&v=4",
                    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
                    "jobProfile": "Chief",
                    "location": "New Delhi"
                },
                {
                    "name": "Utkarsh",
                    "image": "https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-750-563.jpg",
                    "video": "https://www.w3schools.com/html/movie.mp4",
                    "jobProfile": "Chief Tech",
                    "location": "Mumbai"
                },
                {
                    "name": "Utkarsh",
                    "image": "https://i.pinimg.com/originals/34/2b/5e/342b5e6ef239c80e78b99c7e0a53b8d9.jpg",
                    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
                    "jobProfile": "SD2",
                    "location": "Bangalore"
                }
            ],
            "meta": {
                "results": 20,
                "page": 1
            },
            "request": {
                "search": "ui-ux",
                "sort": {
                    "budget": 1
                }
            }
        }
    };
}