
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface AppCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const appData: AppCardProps[] = [
  {
    title: 'Employee Portal',
    description: 'Access HR information, payroll, and benefits',
    icon: '👤',
    category: 'web'
  },
  {
    title: 'Project Management',
    description: 'Track projects, tasks, and deadlines',
    icon: '📊',
    category: 'web'
  },
  {
    title: 'Document Repository',
    description: 'Access company documents and templates',
    icon: '📄',
    category: 'web'
  },
  {
    title: 'Inventory System',
    description: 'Manage inventory and track assets',
    icon: '📦',
    category: 'desktop'
  },
  {
    title: 'Data Analytics',
    description: 'Analyze company data and generate reports',
    icon: '📈',
    category: 'desktop'
  },
  {
    title: 'Customer CRM',
    description: 'Manage customer relationships',
    icon: '👥',
    category: 'web'
  },
  {
    title: 'File Manager',
    description: 'Upload, download and manage files',
    icon: '🗂️',
    category: 'desktop'
  },
  {
    title: 'Meeting Scheduler',
    description: 'Schedule and manage meetings',
    icon: '📅',
    category: 'web'
  },
];

const AppCard: React.FC<AppCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-dandelion hover:shadow-dandelion/20 h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className="text-3xl mb-2">{icon}</span>
        </div>
        <CardTitle className="text-xl text-darkLemonLime">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-acidGreen text-darkGray hover:bg-dandelion transition-all">
          Open Application
        </Button>
      </CardFooter>
    </Card>
  );
};

const AppDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredApps = appData.filter(app => 
    (activeCategory === 'all' || app.category === activeCategory) &&
    (app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     app.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="web" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-darkLemonLime">Application Dashboard</h2>
        <p className="text-gray-600 text-center mb-8">Access all your applications in one place</p>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search applications..." 
              className="pl-10 border-gray-300 focus:border-acidGreen"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">All</TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">Web Apps</TabsTrigger>
              <TabsTrigger value="desktop" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">Desktop Apps</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app, index) => (
            <AppCard 
              key={index} 
              title={app.title} 
              description={app.description} 
              icon={app.icon} 
              category={app.category} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDashboard;
