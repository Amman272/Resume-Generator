import { Link } from 'react-router-dom';
import { FileText, Zap, Download, Github, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="backdrop-blur-md bg-card/80 shadow-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl shadow-lg">
                <FileText className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">ResumeGen</h1>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://github.com/amman272" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg hover:bg-secondary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ammanfawaz/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg hover:bg-secondary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
              <Zap className="h-4 w-4 mr-2" />
              Free Professional Resume Generator
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Create ATS-Friendly Resumes
            <span className="gradient-text block mt-2">Effortlessly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Generate professional, ATS-optimized resumes using LaTeX templates. 
            No complex formatting required - just fill in your details and get a 
            perfectly structured resume that passes through applicant tracking systems.
          </p>

          {/* CTA Button */}
          <div className="mb-20">
            <Link to="/builder" className="btn-primary text-xl group">
              <span>Start Building Your Resume</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">No signup required • 100% free</p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="card p-8 hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border-border/50">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                No design skills needed. Fill out our intuitive form and get a professional resume in under 5 minutes.
              </p>
            </div>

            <div className="card p-8 hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border-border/50">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">ATS Optimized</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Built with LaTeX for perfect formatting that applicant tracking systems can easily parse and understand.
              </p>
            </div>

            <div className="card p-8 hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border-border/50">
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">LaTeX Powered</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Professional typesetting with LaTeX ensures your resume looks polished and stands out from the crowd.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="card p-12 border-border/50">
            <h2 className="text-4xl font-bold text-foreground mb-12">Why Choose Our Resume Generator?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">Clean, professional LaTeX templates designed by experts</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">ATS-friendly formatting guaranteed to pass screening</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">No design experience or technical skills required</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">Instant high-quality PDF generation and download</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">Fully responsive interface works on any device</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground text-lg font-medium">Completely free to use with no hidden costs or limits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-card/80 border-t border-border/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold gradient-text">ResumeGen</span>
            </div>
            <div className="flex items-center space-x-8">
              <span className="text-foreground text-lg font-medium">Created with ❤️ by Amman</span>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/amman272" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-secondary">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/ammanfawaz/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-secondary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;