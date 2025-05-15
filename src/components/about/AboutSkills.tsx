const AboutMe = () => {
  return (
    <div className="py-20 px-4  bg-pink-500/5" id="about">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6 ">
            <h2 className="font-bold text-3xl text-gradient">01. About me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Megha M, a software engineer with a passion for
                creating elegant solutions to complex problems. With 5+ years of
                experience in web development, I focus on building responsive
                and user-friendly applications.
              </p>
              <p>
                I graduated with a Bachelor of Engineering from VTU University,
                Belgum, where I developed a strong foundation in computer
                science principles and software engineering practices.
              </p>
              <p>
                I've since grown my skills working with modern technologies like
                React, TypeScript, and Tailwand CSS. I pride myself on being a
                self-motivated quick learner who can adapt to new challenges and
                technologies.
              </p>
              <p>
                As a strong team player, I bring a positive attitude and
                collaborative approach to every project I work on..
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative p-4 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 border border-pink-500/50 rounded-xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex space-y-6 font-extrabold text-2xl justify-center items-center">
                Skills
              </div>
              <ul className="px-10 list-disc space-y-2">
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwand CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
                <li>Rest API</li>
                <li>Redux</li>
                <li>Context API</li>
                <li>Axios</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
