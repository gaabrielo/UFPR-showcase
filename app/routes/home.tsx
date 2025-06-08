import { Button } from '~/components/ui/button';
import type { Route } from './+types/home';
import { Card, CardContent } from '~/components/ui/card';
import { BookOpen, Target, Users } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
              <span className="text-xl font-semibold text-gray-900">
                Research Group
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#people"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                People
              </a>
              <a
                href="#publications"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Publications
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700">Join Us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Molecular network visualization */}
                <g stroke="white" strokeWidth="1" fill="none">
                  <line x1="200" y1="150" x2="300" y2="100" />
                  <line x1="300" y1="100" x2="400" y2="120" />
                  <line x1="400" y1="120" x2="500" y2="80" />
                  <line x1="300" y1="100" x2="350" y2="200" />
                  <line x1="350" y1="200" x2="450" y2="250" />
                  <line x1="450" y1="250" x2="550" y2="200" />
                  <line x1="150" y1="250" x2="250" y2="300" />
                  <line x1="250" y1="300" x2="350" y2="280" />
                </g>
                <g fill="white" fillOpacity="0.8">
                  <circle cx="200" cy="150" r="8" />
                  <circle cx="300" cy="100" r="10" />
                  <circle cx="400" cy="120" r="6" />
                  <circle cx="500" cy="80" r="8" />
                  <circle cx="350" cy="200" r="12" />
                  <circle cx="450" cy="250" r="8" />
                  <circle cx="550" cy="200" r="6" />
                  <circle cx="150" cy="250" r="10" />
                  <circle cx="250" cy="300" r="8" />
                  <circle cx="350" cy="280" r="6" />
                  <circle cx="600" cy="150" r="8" />
                  <circle cx="650" cy="180" r="6" />
                  <circle cx="100" cy="180" r="8" />
                </g>
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Pillars</h2>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work is guided by a set of core values that define our
              approach to research and collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Research Excellence
                </h3>
                <p className="text-gray-600">
                  We are committed to pushing the boundaries of data science
                  through rigorous research and innovative methodologies.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Collaborative Environment
                </h3>
                <p className="text-gray-600">
                  Our group fosters a collaborative and inclusive environment,
                  bringing together diverse perspectives to tackle complex
                  challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Impactful Discoveries
                </h3>
                <p className="text-gray-600">
                  We strive to translate our research into real-world
                  applications, making a significant impact on society and
                  industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 100" className="w-32 h-16 opacity-60">
                    <g stroke="white" strokeWidth="1" fill="none">
                      {Array.from({ length: 20 }, (_, i) => (
                        <rect
                          key={i}
                          x={i * 10}
                          y={50 - Math.random() * 40}
                          width="8"
                          height={Math.random() * 40}
                          fill="white"
                          fillOpacity="0.7"
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Predictive Analytics for Healthcare
                </h3>
                <p className="text-gray-600">
                  Developing predictive models to improve patient outcomes and
                  optimize healthcare resource allocation.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm mb-2">Machine Learning</div>
                    <div className="text-xs">Algorithms</div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <div>Neural</div>
                      <div>Deep Learning</div>
                      <div>Reinforcement</div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Advanced Machine Learning Techniques
                </h3>
                <p className="text-gray-600">
                  Exploring novel machine learning algorithms to enhance model
                  accuracy and interpretability.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Data-Driven Decision Making"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Data-Driven Decision Making
                </h3>
                <p className="text-gray-600">
                  Leveraging data analytics to support evidence-based decision
                  making in various domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Professors */}
      <section id="people" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Research Professors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Dr. Amelia Rodriguez"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Dr. Amelia Rodriguez
                </h3>
                <p className="text-gray-600 text-sm">
                  Professor of Data Science, Specializing in Machine Learning
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Dr. Ethan Carter"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Ethan Carter</h3>
                <p className="text-gray-600 text-sm">
                  Professor of Statistics, Focusing on Predictive Modeling
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Dr. Noah Bennett"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Noah Bennett</h3>
                <p className="text-gray-600 text-sm">
                  Associate Professor, Expertise in Data Visualization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Researchers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Student Researchers
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Olivia Harper"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">Olivia Harper</h4>
                <p className="text-gray-600 text-sm">
                  PhD Candidate, Researching Deep Learning
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Liam Walker"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">Liam Walker</h4>
                <p className="text-gray-600 text-sm">
                  Master's Student, Working on Time Series Analysis
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Sophia Hayes"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">Sophia Hayes</h4>
                <p className="text-gray-600 text-sm">
                  PhD Candidate, Focusing on Natural Language Processing
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Lucas Foster"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-1">Lucas Foster</h4>
                <p className="text-gray-600 text-sm">
                  Master's Student, Exploring Reinforcement Learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="#privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} © Universidade Federal do Paraná. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
