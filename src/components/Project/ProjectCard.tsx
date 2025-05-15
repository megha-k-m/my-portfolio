import React from 'react';

type ProjectCardProps = {
  title: string;
  client: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = 'HI',
  client = 'HP',
  description = 'One-Config',
  responsibilities = ['Review'],
  technologies = ['React'],
}) => {
  return (
    <div className="w-full md:w-1/3 md:flex-row h-full rounded bg-white/10 p-6 mt-10 mr-10 border-pink-500/50 backdrop-blur-md">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gradient-primary">
              {title}
            </h3>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Client: {client}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

        {/* Responsibilities */}
        <div className="mt-auto">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Responsibilities:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {responsibilities.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-mono border "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
