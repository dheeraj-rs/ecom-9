import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Award, Users, Hammer, Leaf } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Hammer,
      title: 'Handcrafted Excellence',
      description: 'Each piece is meticulously crafted by master artisans with decades of experience.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials sourced from sustainable suppliers worldwide.',
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: 'Three generations of furniture makers dedicated to timeless design and craftsmanship.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Committed to environmental responsibility in every aspect of our manufacturing process.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our <span className="gradient-gold">Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              For over three decades, we've been creating furniture that transforms houses into homes and spaces into experiences.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Crafting Excellence Since 1985
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  What started as a small workshop in the heart of the design district has grown into a renowned manufacturer of luxury furniture, trusted by discerning customers worldwide.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our commitment to excellence is evident in every piece we create. From the selection of premium materials to the final finishing touches, each item undergoes rigorous quality control to ensure it meets our exacting standards.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to honor the traditional craftsmanship techniques passed down through generations while embracing modern design principles to create furniture that is both timeless and contemporary.
                </p>
              </div>
              <div 
                className="aspect-square bg-cover bg-center rounded-lg luxury-shadow"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg)',
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-4">
                What Sets Us <span className="gradient-gold">Apart</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our dedication to quality, craftsmanship, and customer satisfaction makes us the preferred choice for luxury furniture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <feature.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-4">
                Meet Our <span className="gradient-gold">Artisans</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The skilled craftspeople who bring our designs to life with passion and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Marcus Thompson',
                  role: 'Master Craftsman',
                  image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
                  experience: '25 Years Experience',
                },
                {
                  name: 'Isabella Chen',
                  role: 'Design Director',
                  image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
                  experience: '15 Years Experience',
                },
                {
                  name: 'David Rodriguez',
                  role: 'Quality Specialist',
                  image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg',
                  experience: '20 Years Experience',
                },
              ].map((member, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div 
                    className="aspect-square bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}