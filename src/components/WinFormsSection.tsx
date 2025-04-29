
import React, { useState } from 'react';
import { Download, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const WinFormsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const desktopApps = [
    {
      name: 'Inventory Management',
      version: '2.1.0',
      description: 'Advanced inventory tracking and management system',
      requirements: 'Windows 10 or later, .NET Framework 4.8',
      size: '24.5 MB',
      icon: '📦'
    },
    {
      name: 'Financial Reporter',
      version: '3.5.2',
      description: 'Generate detailed financial reports and analytics',
      requirements: 'Windows 8 or later, .NET Framework 4.7.2',
      size: '32.1 MB',
      icon: '💰'
    },
    {
      name: 'Document Scanner',
      version: '1.8.3',
      description: 'Scan and process physical documents with OCR technology',
      requirements: 'Windows 7 or later, .NET Framework 4.6.1',
      size: '18.7 MB',
      icon: '📃'
    }
  ];

  const handleMouseEnter = (index: number) => {
    setFlippedCard(index);
  };

  const handleMouseLeave = () => {
    setFlippedCard(null);
  };

  return (
    <section id="desktop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-darkLemonLime animate-slide-in-right opacity-0" data-section-header>Desktop Applications</h2>
        <p className="text-gray-600 text-center mb-8 animate-slide-in-right opacity-0 animation-delay-200" data-section-description>Download and install our WinForms applications</p>

        <Tabs defaultValue="apps" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="apps" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">Applications</TabsTrigger>
            <TabsTrigger value="requirements" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">System Requirements</TabsTrigger>
            <TabsTrigger value="instructions" className="data-[state=active]:bg-acidGreen data-[state=active]:text-darkGray">Installation Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="apps" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {desktopApps.map((app, index) => (
                <div 
                  key={index} 
                  className="card-flip-container" 
                  onMouseEnter={() => handleMouseEnter(index)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={cn(
                    "card-flip-inner",
                    flippedCard === index && "card-flipped"
                  )}>
                    {/* Card Front */}
                    <div className="card-flip-front">
                      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-dandelion/20 hover:border-dandelion">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <span className="text-3xl mb-2">{app.icon}</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">v{app.version}</span>
                          </div>
                          <CardTitle className="text-xl text-darkLemonLime">{app.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 mb-2">{app.description}</CardDescription>
                          <div className="text-sm text-gray-500">Size: {app.size}</div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-acidGreen text-darkGray hover:bg-dandelion transition-all">
                            <Download className="mr-2 h-4 w-4" /> Download
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                    
                    {/* Card Back */}
                    <div className="card-flip-back">
                      <Card className="h-full flex flex-col bg-darkLemonLime/10 border-dandelion">
                        <CardHeader>
                          <CardTitle className="text-xl text-darkLemonLime">{app.name} Details</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-medium">Version:</span> {app.version}
                            </div>
                            <div>
                              <span className="font-medium">System Requirements:</span> {app.requirements}
                            </div>
                            <div>
                              <span className="font-medium">File Size:</span> {app.size}
                            </div>
                            <div>
                              <span className="font-medium">Last Updated:</span> April 15, 2025
                            </div>
                            <div>
                              <span className="font-medium">Available Modules:</span> Core, Advanced, Enterprise
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-dandelion text-darkGray hover:bg-acidGreen transition-all">
                            <Info className="mr-2 h-4 w-4" /> View Documentation
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle className="text-darkLemonLime">System Requirements</CardTitle>
                <CardDescription>Make sure your system meets these requirements before installing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Operating System</h3>
                    <p className="text-gray-600">Windows 7 SP1 or later (Windows 10/11 recommended)</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Frameworks</h3>
                    <p className="text-gray-600">.NET Framework 4.6.1 or later</p>
                    <p className="text-gray-600">.NET Core 3.1 for newer applications</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Hardware</h3>
                    <p className="text-gray-600">2 GHz dual-core processor or better</p>
                    <p className="text-gray-600">4 GB RAM minimum (8 GB recommended)</p>
                    <p className="text-gray-600">1 GB free disk space</p>
                    <p className="text-gray-600">1366 × 768 screen resolution or higher</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Network</h3>
                    <p className="text-gray-600">Internet connection for updates and some features</p>
                    <p className="text-gray-600">Access to company intranet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions">
            <Card>
              <CardHeader>
                <CardTitle className="text-darkLemonLime">Installation Guide</CardTitle>
                <CardDescription>Follow these steps to install desktop applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="step-1">
                    <AccordionTrigger className="text-darkLemonLime">Step 1: Download the Application</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Click the Download button for the application you want to install.</p>
                      <p className="mb-2">Save the installer file to your computer in a location you can easily find.</p>
                      <p>Note: You may need to sign in with your company credentials to access certain downloads.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="step-2">
                    <AccordionTrigger className="text-darkLemonLime">Step 2: Run the Installer</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Locate the downloaded file (typically an .exe or .msi file).</p>
                      <p className="mb-2">Right-click on the file and select "Run as administrator" for best results.</p>
                      <p>If you see a security warning, click "Yes" or "Run" to allow the installation.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="step-3">
                    <AccordionTrigger className="text-darkLemonLime">Step 3: Complete Setup</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Follow the on-screen instructions in the setup wizard.</p>
                      <p className="mb-2">Choose installation location (default is recommended).</p>
                      <p className="mb-2">Select any additional components if prompted.</p>
                      <p>Complete the installation by clicking "Finish" or "Done".</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="step-4">
                    <AccordionTrigger className="text-darkLemonLime">Step 4: First Launch Configuration</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Launch the application from your desktop or start menu.</p>
                      <p className="mb-2">Sign in with your company credentials when prompted.</p>
                      <p>Configure any initial settings according to your department's requirements.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WinFormsSection;
