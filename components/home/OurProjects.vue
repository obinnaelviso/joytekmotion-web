<script lang="ts" setup>
import { projects } from "@/data/projects";
</script>
<template>
  <section>
    <SectionTitle>Our Projects</SectionTitle>
    <div class="grid grid-cols-1 tablet:grid-cols-3 gap-5">
      <ProjectsSection 
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :status="project.status"
        :url="project.url"
        :githubUrl="project.githubUrl"
        :stackIcons="project.stackIcons"
        :image-url='project.imageUrl'
      />
    </div>
  </section>
</template>
