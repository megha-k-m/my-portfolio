import ProjectCard from './ProjectCard';
const ProjectList = [
  {
    title: 'One Configs',
    client: 'HP Inc',
    description: `Developed a dynamic interface to display region-specific product configurations, enabling users to view and customize details for desktops, laptops, and workstations across different regions 
	Implemented a feature allowing users to select choice IDs and required item IDs for each product, streamlining the creation of configuration IDs based on regional/Country/market specifications.
`,
    responsibilities: [
      'Built everything',
      'Fixed bugs',
      'Collaborated with team',
      'Code Review',
    ],
    technologies: [
      'ReactJS',
      'Jest',
      'Design and build UI',
      'Redux',
      'GraphQL',
      'Material UI',
      'AWS',
    ],
  },

  {
    title: 'HP IQ Quoting:',
    client: 'HP Inc',
    description: `It’s an enterprise level Ecommerce web application where we can search hardware part number, HP laptop, workstation etc. add to quote and can purchase huge quantities with discounted price`,
    responsibilities: ['Built UI', 'Fixed bugs', 'Collaborated with team'],
    technologies: [
      'ReactJS',
      'Jest',
      'Design and build UI',
      'Redux',
      'GraphQL',
      'Material UI',
      'AWS',
      'Tailwand CSS',
      'Typescript',
    ],
  },
//   {
//     title: 'HP IQ Quoting:',
//     client: 'HP Inc',
//     description: `It’s an enterprise level Ecommerce web application where we can search hardware part number, HP laptop, workstation etc. add to quote and can purchase huge quantities with discounted price`,
//     responsibilities: ['Built UI', 'Fixed bugs', 'Collaborated with team'],
//     technologies: [
//       'ReactJS',
//       'Jest',
//       'Design and build UI',
//       'Redux',
//       'GraphQL',
//       'Material UI',
//       'AWS',
//       'Tailwand CSS',
//       'Typescript',
//     ],
//   },
];

const Projects = () => {
  return (
    <div className=" py-20 px-4 bg-pink-500/5" id="projects">
      <div className="container mx-auto max-w-5xl ">
        <div className="font-bold text-3xl">02. Projects</div>
        <div className="flex flex-col md:flex-row">
          {ProjectList.map((each) => {
            return <ProjectCard {...each} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
