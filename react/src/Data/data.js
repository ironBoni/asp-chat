export const chats = [
    {
        chatId: 1,
        participicants: ["ron", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Noam.",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 9, 56)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Ron.",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 5)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 10, 30),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I love it!",
                senderid: "ron",
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
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 10)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Ron!",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 11)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 34),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "It's my favorite song :)",
                senderid: "dvir",
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
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 12)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Ron",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 23),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 35),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Lovely song :)",
                senderid: "dan",
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
                senderid: "ron",
                writtenIn: new Date(2021, 4, 5, 10, 21)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Ron",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 5, 10, 22)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 29),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 10, 39),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 49),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Ron, It's a very nice song! :)",
                senderid: "idan",
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
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 40)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Ron, nice idea",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 52)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 10, 58),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 59),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "ron",
                writtenIn: new Date(2021, 4, 6, 11, 0),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Ron, It's a very nice song! :)",
                senderid: "shlomo",
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
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Noam!",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 12, 7)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 13, 28),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 39),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love it Noam! It's a very nice song! :)",
                senderid: "dvir",
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
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Noam",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 11, 10)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 29),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love it Noam! It's a very nice song! :)",
                senderid: "dan",
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
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 25)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Noam",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 11, 30)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 13, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 13, 43),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "I Love this song! :)",
                senderid: "idan",
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
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 11, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Noam, nice idea",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 11, 40)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 20)
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 12, 30),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "noam",
                writtenIn: new Date(2021, 4, 6, 12, 48),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Noam, It's a very nice song.",
                senderid: "shlomo",
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
                senderid: "dan",
                writtenIn: new Date(2021, 4, 3, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dan!",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 3, 11, 14)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 25),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 11, 29),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Wonderful song",
                senderid: "dvir",
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
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 12, 15)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Dan",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 12, 20)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 13, 29),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 59),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Dan, It's a very nice song",
                senderid: "idan",
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
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 9, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Dan, nice idea",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 9, 49)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 13, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "dan",
                writtenIn: new Date(2021, 4, 6, 13, 22),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "awesome song!",
                senderid: "shlomo",
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
                senderid: "idan",
                writtenIn: new Date(2021, 4, 3, 21, 55)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Idan, nice idea",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 5, 22, 0)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 14, 20),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 15, 20),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "Idan, It's a very nice song",
                senderid: "shlomo",
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
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 4, 23, 25)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Shlomo!",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 4, 23, 26)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 49),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "shlomo",
                writtenIn: new Date(2021, 4, 6, 11, 50),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "nice song",
                senderid: "dvir",
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
                senderid: "idan",
                writtenIn: new Date(2021, 4, 4, 23, 25)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dvir!",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 4, 23, 26)
            },
            {
                id: 3,
                type: "image",
                text: "/logo512.png",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 10, 20),
                fileName: "logo512.png"
            },
            {
                id: 4,
                type: "audio",
                text: "/audio/Hatikva.mp3",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 6, 11, 49),
                fileName: "Hatikva.mp3"
            },
            {
                id: 5,
                type: "video",
                text: "/video/Hatikva.mp4",
                senderid: "dvir",
                writtenIn: new Date(2021, 4, 6, 11, 50),
                fileName: "Hatikva.mp4"
            },
            {
                id: 6,
                type: "text",
                text: "nice song",
                senderid: "idan",
                writtenIn: new Date(2021, 4, 8, 16, 30)
            }
            ]
    }
]

export const myServer = "localhost://3000/";
export const dataServer = "http://localhost:5186/";
export const users = [
    {
        id: 'noam',
        nickname: 'Noam Cohen',
        password: 'Np1234',
        profileImage: "/profile/noam.jpg"
    },
    {
        id: 'dvir',
        nickname: 'Dvir Pollak',
        password: 'Np1234',
        profileImage: "/profile/dvir.jpg"
    },
    {
        id: 'ron',
        nickname: 'Ron Segal',
        password: 'Np1234',
        profileImage: "/profile/ron.jpg"
    },
    {
        id: 'dan',
        nickname: 'Dan Cohen',
        password: 'Np1234',
        profileImage: "/profile/dan.jpg"
    },
    {
        id: 'idan',
        nickname: 'Idan Ben Ari',
        password: 'Np1234',
        profileImage: "/profile/idan.jpg"
    },
    {
        id: 'shlomo',
        nickname: 'Shlomo Levin',
        password: 'Np1234',
        profileImage: "/profile/shlomo.png"
    },
    {
        id: 'yaniv',
        nickname: 'Yaniv Hoffman',
        password: 'Np1234',
        profileImage: "/profile/yaniv.png"
    },
    {
        id: 'oren',
        nickname: 'Oren Orbach',
        password: 'Np1234',
        profileImage: "/profile/oren.webp"
    },
    {
        id: 'yuval',
        nickname: 'Yuval Baruchi',
        password: 'Np1234',
        profileImage: "/profile/yuval.png"
    },
    {
        id: 'ran',
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
