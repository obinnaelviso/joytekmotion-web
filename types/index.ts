export interface NavItem {
    name: string;
    url: string;
}

export interface SocialLink {
    icon: string;
    url: string;
    class?: string[];
}

export interface Slide {
    id: number;
    image: string;
    image_alt: string;
    title: string;
}

export interface StackItem {
    image: string;
    alt: string;
    class?: string;
    height?: string;
}

export interface Project {
    title: string;
    description: string;
    status: string;
    url: string;
    githubUrl: string;
    stackIcons: string[];
    imageUrl: string;
}

export interface Service {
    title: string;
    servicesList: string[];
    action: string;
}
