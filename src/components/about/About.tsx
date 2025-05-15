import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?id=138UeMq8Q9n3z6E9kL-bkOqMrzhU4_5ZN&export=download';
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 px-4 overflow-hidden transition-all duration-1000 gaming-grid bg-pink-500/5">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-0 transition-all duration-1000"
        style={{
          background:
            'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
        }}
      />
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg-gap-12">
          <div className="w-full lg:w-3/5 space-y-6 text-white">
            <div className="space-y-2">
              <h4 className="text-primary font-mono text-lg animate-slide-up">
                Hello, my name is
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up animation-delay-200 neon-text">
                <span className="text-gradient">Megha M</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold h-12 text-muted-foreground animate-slide-up animation-delay-400">
                <div className="h-12 flex items-center space-x-3">
                  <span className="inline-block glitch-text">
                    Front End Developer
                  </span>
                  <div className="flex space-x-3">
                    <FontAwesomeIcon
                      icon={faReact}
                      className="text-blue-500 text-xl"
                    />
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      className="text-yellow-400 text-xl"
                    />
                  </div>
                </div>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up animation-delay-600 scan-effect">
              I'm a passionate software developer with 5+ years of experience
              specializing in building exceptional web applications. Currently
              focused on creating responsive and intuitive user interfaces with
              JavaScript, TypeScript, Tailwand css, and React.
            </p>
            <button
              onClick={handleDownload}
              className="bg-pink-400 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Download Resume
            </button>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 hidden sm:block">
              <div className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow transition-all duration-1000 cyber-border bg-gradient-to-br from-pink-500/30 via-pink-500/20 to-transparent" />
              <div className="w-80 h-80 bg-white/10 rounded-full backdrop-blur-3xl flex justify-center items-center animate-orbit">
                <div className="w-50 h-50 bg-gradient-to-br from-pink-500/50 to-pink-600/50 text-white rounded-full flex items-center justify-center text-7xl font-bold ransform transition-transform duration-300 hover:scale-110 hover:rotate-3shadow-lg animate-pulse">
                  MM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
