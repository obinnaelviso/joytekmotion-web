import type { NavItem, SocialLink, Slide, StackItem } from '~/types';
import freelanceBgImg from "/images/slider/hero/freelance-community-bg.jpg";
import javaBgImg from "/images/slider/hero/java-bg.jpg";
import ubuntuBgImg from "/images/slider/hero/ubuntu-bg.jpg";

export const menuLinks: NavItem[] = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Services",
        url: "/services",
    },
    {
        name: "Projects",
        url: "/projects",
    },
    {
        name: "About Us",
        url: "/about",
    },
];

export const socialIcons: SocialLink[] = [
    {
        icon: "uil:github",
        url: "https://github.com/obinnaelviso",
        class: ["hover:text-black"],
    },
    {
        icon: "uil:facebook-f",
        url: "https://facebook.com/joytekmotion",
        class: ["hover:text-blue-500"],
    },
    {
        icon: "uil:linkedin",
        url: "https://linkedin.com/company/joytekmotion",
        class: ["hover:text-sky-700"],
    },
    {
        icon: "uil:twitter",
        url: "https://twitter.com/joytekmotion",
        class: ["hover:text-sky-400"],
    },
    {
        icon: "cib:upwork",
        url: "https://www.upwork.com/freelancers/~013e0288cb1c5abc47",
        class: ["hover:text-green-500"],
    },
    {
        icon: "jam:fiverr",
        url: "https://fiverr.com/obinnaelviso",
        class: ["hover:text-green-600"],
    },
];

export const heroSlides: Slide[] = [
    {
        image: freelanceBgImg,
        image_alt: "laptop with monitor",
        title: "We are a <span class='text-orange-300'>community of freelancers</span> who work together to get the job done.",
        id: 0,
    },
    {
        image: javaBgImg,
        image_alt: "dark background with java logo at the bottom right corner",
        title: "We <span class='text-orange-300'>build, fix and maintain</span> your websites, mobile and desktop applications for you.",
        id: 1,
    },
    {
        image: ubuntuBgImg,
        image_alt: "dark background with ubuntu logo at the center",
        title: "We ensure you spend less in <span class='text-orange-300'>server maintenance</span> while you make your profit.",
        id: 2,
    },
];

export const stackItems: StackItem[] = [
    { image: "/images/slider/stack/github.png", alt: "github logo", class: "h-28 m-auto", height: "90" },
    { image: "/images/slider/stack/java.png", alt: "java logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/php.png", alt: "php logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/mysql.png", alt: "mysql logo", class: "h-24 m-auto" },
    { image: "/images/slider/stack/html-css-js.png", alt: "html-css-js logo", class: "h-24 m-auto", height: "90" },
    { image: "/images/slider/stack/cpanel.png", alt: "cpanel logo", class: "mt-5" },
    { image: "/images/slider/stack/python.png", alt: "python logo", class: "h-24 m-auto", height: "90" },
    { image: "/images/slider/stack/laravel.png", alt: "laravel logo", class: "h-24 m-auto" },
    { image: "/images/slider/stack/aws.png", alt: "aws logo", class: "h-24 m-auto" },
    { image: "/images/slider/stack/nginx.webp", alt: "nginx logo", class: "mt-5" },
    { image: "/images/slider/stack/kotlin.png", alt: " logo", class: "h-24 m-auto", height: "90" },
    { image: "/images/slider/stack/vuejs.webp", alt: "vuejs logo", class: "h-24 m-auto", height: "90" },
    { image: "/images/slider/stack/nodejs.png", alt: "nodejs logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/nuxtjs.png", alt: "nuxtjs logo", class: "mt-5" },
    { image: "/images/slider/stack/digitalocean.png", alt: "digitalocean logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/flutter.png", alt: "flutter logo", class: "mt-5" },
    { image: "/images/slider/stack/react.png", alt: "react logo", class: "h-24 m-auto", height: "90" },
    { image: "/images/slider/stack/mongodb.png", alt: "mongodb logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/nextjs.png", alt: "nextjs logo", class: "h-28 m-auto", height: "90" },
    { image: "/images/slider/stack/spring-boot.png", alt: "spring boot logo", class: "h-32 m-auto" },
    { image: "/images/slider/stack/vercel.png", alt: "vercel logo", class: "mt-5" },
];
