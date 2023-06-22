import Bell from "@/icons/bell";
import Chat from "@/icons/chat";
import Comment from "@/icons/comment";
import Explore from "@/icons/explore";
import Home from "@/icons/home";
import Plus from "@/icons/plus";
import Repeat from "@/icons/repeat";
import TastList from "@/icons/taskList";

export const MENU_DEFAULT_ITEMS = [
    {
        icon: Home,
        label: "Dashboard",
    },
    {
        icon: Chat,
        label: "Feedback",
    },
    {
        icon: TastList,
        label: "Task",
        active: true,
    },
    {
        icon: Explore,
        label: "Roadmap",
    },
    {
        icon: Repeat,
        label: "Changelog",
    },
];


export const FOOTER_ITEMS = [
    {
        icon: Plus,
        label: "Invite people",
    },
    {
        icon: Comment,
        label: "Help & Community",
    },
    {
        icon: Bell,
        label: "Notifications",
    }
];