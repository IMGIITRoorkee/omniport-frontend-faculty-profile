export const eventOptions  = [
    { text: "Conference", key: "CONFERENCE", value: "con" },
    { text: "Guest Lecture", key: "GUEST_LECTURE", value: "gue" },
    { text: "Seminar", key: "SEMINAR", value: "sem" },
    { text: "Short term course", key: "SHORT_TERM_COURSE", value: "stc" },
    { text: "Special lecture", key: "SPECIAL_LECTURE", value: "spl" },
    { text: "Talk", key: "TALK", value: "tlk" },
    { text: "Other", key: "OTHER", value: "oth" }
];

export const projectOptions = [
    { text: "Sponsored", key: "SPONSORED", value: "s" },
    { text: "Consultancy", key: "CONSULTANCY", value: "c" }
];

export const categoryOptions = [
    { text: "Conference", key: "CONFERENCE", value: "con"},
    { text: "Guest Lecture", key: "GUEST_LECTURE", value: "gue"},
    { text: "Seminar", key: "SEMINAR", value: "sem"},
    { text: "Short Term Course", key: "SHORT_TERM_COURSE", value: "stc"},
    { text: "Lecture", key: "LECTURE", value: "spl"},
    { text: "Special Talk", key: "SPECIAL_TALK", value: "tlk"},
    { text: "Other", key: "OTHER", value: "oth" }
]
export const roleOptions = [
    { text: "Organiser", key: "ORGANISER", value: "o" },
    { text: "Attendee", key: "ATTENDEE", value: "a" },
    { text: "Invitee", key: "INVITEE", value: "i" }
];

export const scopeOptions = [
    { text: "Departmental", key: "DEPARTMENTAL", value: "d" },
    { text: "Central", key: "CENTRAL", value: "c" },
    { text: "Institute", key: "INSTITUTE", value: "i" },
    { text: "External", key: "EXTERNAL", value: "e" }
];

export const supervisionOptions = [
    { text: "Project", key: "PROJECT", value: "pro" },
    { text: "Doctorate", key: "DOCTORATE", value: "doc" }
];

export const graduationOptions = [
    { text: "Matriculate", key: "MATRICULATE", value: "mat" },
    { text: "Intermediate", key: "INTERMEDIATE", value: "int" },
    { text: "Associate", key: "ASSOCIATE", value: "ass" },
    { text: "Graduate", key: "GRADUATE", value: "gra" },
    { text: "Postgraduate", key: "POSTGRADUATE", value: "pos" },
    { text: "Doctorate", key: "DOCTORATE", value: "doc" },
    { text: "Postdoctorate", key: "POSTDOCTORATE", value: "pdo" }
  ];

export const semesterOptions = [
    { text: "Spring", key: "SPRING", value: "s" },
    { text: "Autumn", key: "AUTUMN", value: "a" }
];

export const collaborationOptions = [
    { text: "Undergraduate", key: "UNDERGRADUATE", value: "ug" },
    { text: "Postgraduate", key: "POSTGRADUATE", value: "pg" },
    { text: "PhD", key: "DOCTORATE", value: "phd" },
    { text: "Research Project", key: "RESEARCH_PROJECT", value: "rp" },
    { text: "Other", key: "OTHER", value: "oth" }
];

let list = {};
for (let index in graduationOptions) {
list[graduationOptions[index]["value"]] = graduationOptions[index]["text"];
}

export const graduationOptionsMap = list;

for (let index in supervisionOptions) {
list[supervisionOptions[index]["value"]] = supervisionOptions[index]["text"];
}

export const supervisionOptionsMap = list;
  
export const reduceValueToText = (value, object) => {
    return value == object.value ? object.text : value;
}