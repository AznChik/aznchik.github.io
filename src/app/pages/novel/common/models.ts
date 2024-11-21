export interface Story {
    text: string;
    buttons: Button[]
}

interface Button {
    id: string;
    text: string;
}