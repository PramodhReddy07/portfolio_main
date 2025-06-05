'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
// import SimpleProjectCard from '@/components/SimpleProjectCard';


const ProjectCardList = () => {
  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Proof of Work' />
      {/* <SimpleProjectCard /> */}

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: '/placeholder.png',
    title: "JobMatch AI",
    description: "Project in development. Coming soon!",
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    link: "#",
    source: "#",
  },
  {
    logo: '/placeholder.png',
    title: "Home Hub",
    description: "Project in development. Coming soon!",
    techStack: ["Tech A", "Tech B", "Tech C"],
    link: "#",
    source: "#",
  },

];

export const metadata = {
  // ...existing metadata
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      { rel: 'icon', url: '/icon1.png', type: 'image/png', sizes: '192x192' },
      { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' }
    ]
  }
}