'use client'

import { MagicCard } from './ui/magic-card'
import Image from 'next/image';
import { Link } from '@radix-ui/themes';
import { I_Coursework } from '@/types/project';
import { inter, bricolage_grotesque } from '@/utils/fonts';
import Title from './ui/Title';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const data: I_Coursework[] = [
  {
    course_title: "Data Structures & Algorithms",
    course_company_name: "Illinois Institute of Technology",
    course_company_logo: "/iit.png",
    course_link: "https://www.iit.edu/academics/programs/computer-science-ms",
    duration: "Aug 2022 – May 2024",
    description: "Studied fundamental and advanced data structures, algorithm design, and problem-solving techniques."
  },
  {
    course_title: "Machine Learning",
    course_company_name: "Illinois Institute of Technology",
    course_company_logo: "/iit.png",
    course_link: "https://www.iit.edu/academics/programs/computer-science-ms",
    duration: "Aug 2022 – May 2024",
    description: "Covered supervised and unsupervised learning, model evaluation, and real-world ML applications."
  },
  {
    course_title: "Distributed Systems",
    course_company_name: "Illinois Institute of Technology",
    course_company_logo: "/iit.png",
    course_link: "https://www.iit.edu/academics/programs/computer-science-ms",
    duration: "Aug 2022 – May 2024",
    description: "Explored distributed architectures, consensus algorithms, and fault tolerance in large-scale systems."
  },
  {
    course_title: "Cloud Computing",
    course_company_name: "Illinois Institute of Technology",
    course_company_logo: "/iit.png",
    course_link: "https://www.iit.edu/academics/programs/computer-science-ms",
    duration: "Aug 2022 – May 2024",
    description: "Learned about cloud service models, deployment, and scalable application development on cloud platforms."
  },
  {
    course_title: "Relational Databases",
    course_company_name: "Illinois Institute of Technology",
    course_company_logo: "/iit.png",
    course_link: "https://www.iit.edu/academics/programs/computer-science-ms",
    duration: "Aug 2022 – May 2024",
    description: "Focused on database design, SQL, normalization, and transaction management."
  }
];

const Coursework = () => {
    const { isDarkMode } = useDarkMode()
    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='Coursework' />

            <span className='mt-2'></span>
            {data.map((course: I_Coursework, idx: number) => (
                <MagicCard key={idx} className="cursor-pointer dark:shadow-2xl h-fit mt-2 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                    <div className="flex !justify-between w-[50vw] max-lg:w-full max-sm:w-full px-5 max-sm:px-0 py-3">
                        <div className="w-full flex">
                            <div className="w-24 h-12 flex justify-center">
                                <Link href={course.course_link} target='_blank'>
                                    <Image src={course.course_company_logo} alt='100xdevs' width={50} height={50} className='rounded-full' />
                                </Link>
                            </div>
                            <div className="w-full">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className={`max-lg:w-[68vw] w-full flex justify-between max-[350px]:justify-start ${bricolage_grotesque}`}>
                                            <AccordionTrigger>
                                                <h2 className='text-base max-sm:text-[15px] font-semibold text-start'>{course.course_title}</h2>
                                            </AccordionTrigger>
                                            <span className='text-xs max-sm:text-[10px] max-sm:hidden pr-1'>{course.duration}</span>
                                        </div>
                                        <p className={`text-sm max-sm:text-xs ${inter}`}>{course.course_company_name} </p>
                                        <AccordionContent className='mt-2 max-sm:text-[11px]'>
                                            {course.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </MagicCard>
            ))}
        </div>
    )
}

export default Coursework
