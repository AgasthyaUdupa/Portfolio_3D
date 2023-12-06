import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { studies, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Agasthya Udupa
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-black-400'>
      <p className="mb-3">
      I am a highly motivated individual with a Bachelor's degree in Computer Applications (BCA) 
      and a passion for full-stack web development. 
      With a strong foundation in  
      <span className="font-medium italic"> JavaScript, ReactJS, Next.js, Express.js, MongoDB, Tailwind CSS, HTML, and CSS</span>.
       My commitment to staying at the 
      forefront of technology is evident in my constant drive to learn 
      and adapt to new programming trends and methodologies. I believe in the power of continuous
       self-improvement and am always eager to take on new challenges in the dynamic world of web development.
      </p>

      <p>
         <span className="italic">When I'm not coding</span>,  I am an avid <span className="font-medium">Cricketer</span> who understands the importance of teamwork,
         discipline, and strategy on and off the field.
          My dedication to fitness not only keeps me physically active 
          but also helps me maintain focus and mental clarity in my work.
          Additionally, I have a keen interest in music and am currently in the process of learning to play the<span className="font-medium"> Guitar</span> .
          These hobbies reflect my well-rounded nature and my drive to excel in various facets of life, 
          whether it's in the coding realm or pursuing my passions outside of work.
      </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
           I have completed my Degree in <span className='text-slate-700'>Bachelor Of Computer Application(Bca)</span>  in 2023.Now I'm Pursuing my masters degree in <span className='text-slate-700'>Master Of Computer Application(Mca)</span> .
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {studies.map((studies, index) => (
              <VerticalTimelineElement
                key={studies.institute_name}
                date={studies.date}
                iconStyle={{ background: studies.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={studies.icon}
                      alt={studies.institute_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: studies.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {studies.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {studies.institute_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {studies.points.map((point, index) => (
                    <li
                      key={`studies-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
