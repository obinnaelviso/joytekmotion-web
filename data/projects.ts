import type { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "Jobberoo - Online Job Recruitment Website",
    description: "This is a job board platform that connects job seekers with employers.",
    status: "In Development",
    url: "https://jobberoo.joytekmotion.com",
    githubUrl: "https://github.com/obinnaelviso/jobberoo",
    stackIcons: ["devicon:laravel"],
    imageUrl: '/images/home/jobberoo.png'
  },
  {
    title: "Laundromat POS - Point-of-Sale System for laundromats",
    description: "This is a point-of-sale system for laundromats that allows staffs to manage sales and inventory.",
    status: "In Development",
    url: "https://lpos.techzoid.ng/login",
    githubUrl: "",
    stackIcons: ["devicon:laravel", "devicon:livewire"],
    imageUrl: '/images/home/laundromat-pos.png'
  }
];