import { Button } from '~/components/ui/button';
import type { Route } from './+types/home';
import { Card, CardContent } from '~/components/ui/card';
import { BookOpen, Target, Users } from 'lucide-react';
import { Avatar, AvatarImage } from '~/components/ui/avatar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl overflow-hidden h-[50vh] flex items-center justify-center">
            <video
              src="/videos/cover-2k.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-teal-700/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Pillars</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mt-4">
            Our work is guided by a set of core values that define our approach
            to research and collaboration.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work is guided by a set of core values that define our
              approach to research and collaboration.
            </p>
          </div> */}
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
              <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 relative"></div>
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
              <div className="h-48 bg-gradient-to-br from-gray-800 to-slate-600 relative"></div>
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
              <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-400 relative"></div>
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
                <Avatar className="w-20 h-20 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover"
                    src="/images/professors/1.jpg"
                  />
                </Avatar>

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
                <Avatar className="w-20 h-20 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover"
                    src="/images/professors/2.jpg"
                  />
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">Dr. Ethan Carter</h3>
                <p className="text-gray-600 text-sm">
                  Professor of Statistics, Focusing on Predictive Modeling
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover"
                    src="/images/professors/3.jpg"
                  />
                </Avatar>
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
                <Avatar className="w-16 h-16 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover object-top"
                    src="/images/students/1.jpg"
                  />
                </Avatar>

                <h4 className="font-semibold mb-1">Olivia Harper</h4>
                <p className="text-gray-600 text-sm">
                  PhD Candidate, Researching Deep Learning
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <Avatar className="w-16 h-16 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover object-top"
                    src="/images/students/2.jpg"
                  />
                </Avatar>
                <h4 className="font-semibold mb-1">Liam Walker</h4>
                <p className="text-gray-600 text-sm">
                  Master's Student, Working on Time Series Analysis
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                {/* <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Sophia Hayes"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <Avatar className="w-16 h-16 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover object-top"
                    src="/images/students/3.jpg"
                  />
                </Avatar>
                <h4 className="font-semibold mb-1">Sophia Hayes</h4>
                <p className="text-gray-600 text-sm">
                  PhD Candidate, Focusing on Natural Language Processing
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <Avatar className="w-16 h-16 border mx-auto mb-4">
                  <AvatarImage
                    className="object-cover object-top"
                    src="/images/students/4.jpg"
                  />
                </Avatar>
                <h4 className="font-semibold mb-1">Lucas Foster</h4>
                <p className="text-gray-600 text-sm">
                  Master's Student, Exploring Reinforcement Learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
