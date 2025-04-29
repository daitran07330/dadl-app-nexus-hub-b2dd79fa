
import React from 'react';
import { Bell, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const announcements = [
  {
    id: 1,
    title: 'System Maintenance This Weekend',
    description: 'All systems will be down for maintenance from Saturday 10 PM to Sunday 2 AM.',
    date: '2025-05-02',
    category: 'IT',
    priority: 'high'
  },
  {
    id: 2,
    title: 'New Project Management Tool Release',
    description: 'We are launching an updated version of our project management tool with new features.',
    date: '2025-05-05',
    category: 'Development',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Company Meeting Next Week',
    description: 'All employees are required to attend the quarterly company meeting next Thursday at 2 PM.',
    date: '2025-05-10',
    category: 'HR',
    priority: 'medium'
  },
  {
    id: 4,
    title: 'New Security Policy Implementation',
    description: 'We are implementing a new security policy. Please review the documentation.',
    date: '2025-05-03',
    category: 'Security',
    priority: 'high'
  },
  {
    id: 5,
    title: 'Office Closure for Holiday',
    description: 'The office will be closed on May 15th for the national holiday.',
    date: '2025-05-15',
    category: 'HR',
    priority: 'low'
  },
  {
    id: 6,
    title: 'Budget Reports Due',
    description: 'All department budget reports are due by the end of this week.',
    date: '2025-05-07',
    category: 'Finance',
    priority: 'high'
  }
];

const AnnouncementCard = ({ announcement }: { announcement: typeof announcements[0] }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  const categoryColors = {
    IT: 'bg-blue-100 text-blue-800',
    Development: 'bg-purple-100 text-purple-800',
    HR: 'bg-pink-100 text-pink-800',
    Security: 'bg-orange-100 text-orange-800',
    Finance: 'bg-indigo-100 text-indigo-800'
  };

  const getDateFormatted = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 flex-wrap">
            <Badge className={categoryColors[announcement.category as keyof typeof categoryColors]}>
              {announcement.category}
            </Badge>
            <Badge className={priorityColors[announcement.priority as keyof typeof priorityColors]}>
              {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
            </Badge>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {getDateFormatted(announcement.date)}
          </div>
        </div>
        <CardTitle className="text-lg text-darkLemonLime mt-2">{announcement.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{announcement.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="text-darkLemonLime hover:text-acidGreen hover:bg-darkLemonLime/10">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const AnnouncementsSection = () => {
  const categories = ['All', 'IT', 'Development', 'HR', 'Security', 'Finance'];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Bell className="h-6 w-6 text-acidGreen" />
          <h2 className="text-3xl font-bold text-center text-darkLemonLime">Announcements & Updates</h2>
        </div>
        <p className="text-gray-600 text-center mb-8">Stay updated with the latest company news and updates</p>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements
                  .filter(announcement => category === 'All' || announcement.category === category)
                  .map(announcement => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
