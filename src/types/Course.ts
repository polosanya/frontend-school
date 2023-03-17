export interface Course {
    id: string;
    title: string;
    tags?: string[];
    launchDate: string;
    status: string; //can be type
    description: string;
    duration: number; // hours?
    previewImageLink: string; //"https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it"
    rating: number;
    meta?: Meta;
    lessons?: Lesson[];
    containsLockedLessons: boolean;
}

export interface Meta {
    slug: string;
    skills?: string[];
    courseVideoPreview?: VideoPreview;
}

export interface VideoPreview {
    link: string; //"https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8",
    duration: number;
    previewImageLink: string; // "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview"
}

export interface Lesson {
    id: string;
    title: string;
    duration: number;
    order: number;
    type: string; //can be type
    status: string; //can be type
    link: string; // "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8",
    previewImageLink: string; // "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1",
    meta: null;
}