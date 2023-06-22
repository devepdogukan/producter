export const defaultItems = [
    {
        text: "Being able to rename and edit users lorem rename and edit users",
        level: 3,
        hour: 8,
        code: "TSK-01",
        type: "task",
    },
    {
        text: "Being able to rename and edit us...",
        level: 1,
        hour: 13,
        code: "EPC-02",
        type: "epic",
    },
    {
        text: "Being able to rename and edit us...",
        level: 2,
        hour: 21,
        code: "TSK-03",
        type: "task",
    },
    {
        text: "Being able to rename and edit users rename and edit users lorem ",
        level: 1,
        hour: 5,
        code: "TSK-02",
        type: "task",
    },
    {
        text: "Being able to rename and edit us...",
        level: 2,
        hour: 3,
        code: "EPC-03",
        type: "epic",
    },
];

export const LogWrappers = [
    {
        name: "Backlog",
        items: defaultItems,
        slug: 'backlog'
    },
    {
        name: "To Do",
        items: defaultItems,
        slug: 'todo'
    },
    {
        name: "In Progress",
        items: defaultItems,
        slug: 'inprogress'
    },
    {
        name: "Test",
        items: defaultItems,
        slug: 'test'
    },
];
