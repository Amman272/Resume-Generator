import { Link } from 'react-router-dom';
import { Github, Linkedin, FileText, Zap, Target, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md shadow-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-xl">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">ATS Resume Builder</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/amman272" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ammanfawaz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Simple. <span className="gradient-text">ATS-Friendly.</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              LaTeX-Powered.
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create professional resumes that pass through Applicant Tracking Systems with ease. 
            No design complexity, just clean formatting powered by LaTeX for perfect results every time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/builder">
              <Button className="btn-primary text-lg px-12 py-6">
                Try Now - It's Free
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">No signup required • Generate instantly</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-2xl inline-block mb-6">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Extreme Simplicity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Just fill out the form. No design decisions, no formatting headaches. 
              Focus on your content, we handle the rest.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-2xl inline-block mb-6">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">ATS Optimized</h3>
            <p className="text-muted-foreground leading-relaxed">
              Guaranteed to pass through Applicant Tracking Systems. 
              Clean structure and formatting that recruiters and algorithms love.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-2xl inline-block mb-6">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">LaTeX Power</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional typesetting with LaTeX ensures your resume looks 
              polished and consistent across all platforms and printers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-12 text-center bg-gradient-to-r from-primary/5 to-accent/5">
          <h2 className="text-3xl font-bold mb-6 text-card-foreground">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've landed interviews with our ATS-friendly resumes. 
            No learning curve, no design skills needed.
          </p>
          <Link to="/builder">
            <Button className="btn-primary text-lg px-12 py-6">
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-card-foreground">ATS Resume Builder</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground">Built by Amman</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/amman272" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ammanfawaz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
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