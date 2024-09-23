<script lang="ts" setup>
import { projects } from "@/data/projects";

const title = "Projects";
const description = "From management systems to AI-powered applications, we build projects that are scalable and maintainable. We also contribute to open-source projects.";
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<template>
  <div>
    <PageTitle backgroundImage="/images/slider/hero/freelance-community-bg.jpg" :title="title" :description="description" />
    <Container>
      <div class="my-20 text-center">
        <SectionTitle class="mb-5">Projects are what we do for a living</SectionTitle>
        <p class="text-gray-500 laptop:px-56 text-lg">
          We've worked on quite a number of projects, up to 50+ projects and counting. But our clients are quite shy to share their projects with the world. 
          <br>Below are some of the projects we've worked on.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        <ProjectsSection
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :status="project.status"
          :url="project.url"
          :githubUrl="project.githubUrl"
          :stackIcons="project.stackIcons"
          :imageUrl="project.imageUrl"
        />
      </div>
    </Container>
  </div>
</template>
