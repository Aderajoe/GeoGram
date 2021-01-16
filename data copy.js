
export const data ={
    "users": [
        {
            "_id": 101,
            "fullname": "Noa Cohen",
            "city": "Tel-Aviv",
            "age": 27,
            "email": "noacohen@gmail.com",
            "password": 123456,
            "imgUrls": [
                "https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?cs=srgb&dl=pexels-bruno-cervera-4119310.jpg&fm=jpg"
            ],
            "joinedAt": 1991274912523,
            "intrests": [
                "Sunsets",
                "Sunshine",
                "Surfing",
                "Gaming"
            ],
            "following": [
                {
                    "_id": 102,
                    "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                    "fullname": "Dana David"
                }
            ],
            "followedBy": [
                {
                    "_id": 102,
                    "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                    "fullname": "Dana David"
                }
            ]
        },
        {
            "_id": 102,
            "fullname": "Dana David",
            "city": "New York",
            "age": 22,
            "email": "danadavid@gmail.com",
            "password": 123456,
            "imgUrls": [
                "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg"
            ],
            "joinedAt": 1991174012523,
            "intrests": [
                "Sunsets",
                "Rainy days",
                "Reading books",
                "Food"
            ],
            "following": [
                {
                    "_id": 101,
                    "imgUrl": "https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?cs=srgb&dl=pexels-bruno-cervera-4119310.jpg&fm=jpg",
                    "fullname": "Noa Cohen"
                }
            ],
            "followedBy": [
                {
                    "_id": 101,
                    "imgUrl": "https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?cs=srgb&dl=pexels-bruno-cervera-4119310.jpg&fm=jpg",
                    "fullname": "Noa Cohen"
                }
            ]
        }
    ],
    "posts": [
        {
            "_id": 201,
            "txt": "Nothing is better than the simple things in life.",
            "imgUrl": "https://images.pexels.com/photos/6127217/pexels-photo-6127217.jpeg?cs=srgb&dl=pexels-rachel-claire-6127217.jpg&fm=jpg",
            "at": 1991274912482,
            "tags": [
                "Flowers",
                "Sunshine",
                "The good life"
            ],
            "by": {
                "_id": 101,
                "imgUrl": "https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?cs=srgb&dl=pexels-bruno-cervera-4119310.jpg&fm=jpg",
                "fullName": "Noa Cohen"
            },
            "likes": [
                {
                    "_id": 102,
                    "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                    "fullname": "Dana David"
                }
            ],
            "commets": [
                {
                    "by": {
                        "_id": 102,
                        "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                        "fullname": "Dana David"
                    },
                    "txt": "Have a nice day my sister from another mother",
                    "createdAt": 1991294912482
                }
            ]
        },
        {
            "_id": 202,
            "txt": "Nothing is better than the simple things in life.",
            "imgUrl": "https://images.pexels.com/photos/6331187/pexels-photo-6331187.jpeg?cs=srgb&dl=pexels-anete-lusina-6331187.jpg&fm=jpg",
            "at": 1991274912482,
            "tags": [
                "Flowers",
                "Sunshine",
                "The good life"
            ],
            "by": {
                "_id": 101,
                "imgUrl": "https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?cs=srgb&dl=pexels-bruno-cervera-4119310.jpg&fm=jpg",
                "fullName": "Noa Cohen"
            },
            "likes": [
                {
                    "_id": 102,
                    "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                    "fullname": "Dana David"
                }
            ],
            "commets": [
                {
                    "by": {
                        "_id": 102,
                        "imgUrl": "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                        "fullname": "Dana David"
                    },
                    "txt": "Have a nice day my sister from another mother",
                    "at": 1991294912482
                }
            ]
        }
    ]
}