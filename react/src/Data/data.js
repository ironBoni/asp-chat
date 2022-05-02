export const chats = [
    {
        chatId: 1,
        participicants: ["ron", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Noam.",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 9, 56)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 5)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 10, 30),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I love it!",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 8, 10, 30)
            }
            ]
    },
    {
        chatId: 2,
        participicants: ["ron", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 10)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Ron!",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 11)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 34),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "It's my favorite song :)",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 3,
        participicants: ["ron", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to the mall",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 12)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Ron",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 23),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 35),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Lovely song :)",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 4,
        participicants: ["ron", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, how was your semester?",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 5, 10, 21)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Ron",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 5, 10, 22)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 29),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 10, 39),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 49),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Ron, It's a very nice song! :)",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 5,
        participicants: ["ron", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 40)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Ron, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 52)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 58),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 59),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "ron",
                writtenIn: new Date(2021, 4, 6, 11, 0),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Ron, It's a very nice song! :)",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 7,
        participicants: ["noam", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Noam!",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 12, 7)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 13, 28),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 39),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love it Noam! It's a very nice song! :)",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 8,
        participicants: ["noam", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to the mall",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Noam",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 11, 10)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 29),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love it Noam! It's a very nice song! :)",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 9,
        participicants: ["noam", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, how was your semester?",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 25)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Noam",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 11, 30)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 13, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 43),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love this song! :)",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 10,
        participicants: ["noam", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Noam, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 11, 40)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 20)
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 12, 30),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 48),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Noam, It's a very nice song.",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 12,
        participicants: ["dan", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 3, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dan!",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 3, 11, 14)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 11, 29),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Wonderful song",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 13,
        participicants: ["dan", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, let's go to the mall",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 12, 15)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Dan",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 12, 20)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 13, 29),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 59),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Dan, It's a very nice song",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 8, 12, 30)
            }
            ]
    },
    {
        chatId: 15,
        participicants: ["dan", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 9, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Dan, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 9, 49)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 22),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "awesome song!",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 8, 16, 30)
            }
            ]
    },
    {
        chatId: 20,
        participicants: ["idan", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 3, 21, 55)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Idan, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 5, 22, 0)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 14, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 15, 20),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Idan, It's a very nice song",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 8, 16, 30)
            }
            ]
    },
    {
        chatId: 22,
        participicants: ["shlomo", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 4, 23, 25)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Shlomo!",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 4, 23, 26)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 49),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "shlomo",
                writtenIn: new Date(2021, 4, 6, 11, 50),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "nice song",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 8, 16, 30)
            }
            ]
    },
    {
        chatId: 25,
        participicants: ["dvir", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 4, 23, 25)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dvir!",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 4, 23, 26)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 6, 11, 49),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderUsername: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 50),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "nice song",
                senderUsername: "idan",
                writtenIn: new Date(2021, 4, 8, 16, 30)
            }
            ]
    }
]

export const users = [
    {
        username: 'noam',
        nickname: 'Noam Cohen',
        password: 'Np1234',
        profileImage: "/profile/noam.jpg"
    },
    {
        username: 'dvir',
        nickname: 'Dvir Pollak',
        password: 'Np1234',
        profileImage: "/profile/dvir.jpg"
    },
    {
        username: 'ron',
        nickname: 'Ron Segal',
        password: 'Np1234',
        profileImage: "/profile/ron.jpg"
    },
    {
        username: 'dan',
        nickname: 'Dan Cohen',
        password: 'Np1234',
        profileImage: "/profile/dan.jpg"
    },
    {
        username: 'idan',
        nickname: 'Idan Ben Ari',
        password: 'Np1234',
        profileImage: "/profile/idan.jpg"
    },
    {
        username: 'shlomo',
        nickname: 'Shlomo Levin',
        password: 'Np1234',
        profileImage: "/profile/shlomo.png"
    },
    {
        username: 'yaniv',
        nickname: 'Yaniv Hoffman',
        password: 'Np1234',
        profileImage: "/profile/yaniv.png"
    },
    {
        username: 'oren',
        nickname: 'Oren Orbach',
        password: 'Np1234',
        profileImage: "/profile/oren.webp"
    },
    {
        username: 'yuval',
        nickname: 'Yuval Baruchi',
        password: 'Np1234',
        profileImage: "/profile/yuval.png"
    },
    {
        username: 'ran',
        nickname: 'Ran Levi',
        password: 'Np1234',
        profileImage: "/profile/ran.webp"
    }
]

export const video_extensions = [
    "avi", "mp4", "mkv", "mpeg", "wmv",
    "mts", "ts", "tts", "wm", "aac", "adt",
    "adts", "asx", "dat", "ivf", "m1v", "m4a", "mod",
    "mod", "mp2", "mp3", "mpv2", "wmx", "mpv2",
    "m2t", "m2ts", "m4v", "mk3d", "mov", "mp2v", "mpa",
    "3g2", "3gp", "3gp2", "3gpp", "asf", 'mp4', "mpg",
    "wmx", "wpl", "wvx"
]

export const image_extensions = [
    'emf', "wmf", "jpg", "jpeg", "jfif", "webp",
    "jpe", "png", "bmp", "dib", "rle", "gif",
    "emz", "wmz", "tif", "tiff", "svg", "ico"
]

export const audio_extensions = [
    "mp3", "wav", "wma", "aif", "mka",
    "aifc", "asf", "au", "m3u", "mid", "rmi",
    "snd", "wax", "webp", "3gp", "aa", "aac",
    "aax", "act", "alac", "ogg",
    "m4a", "flac", "amr", "aac", "adts"
]
