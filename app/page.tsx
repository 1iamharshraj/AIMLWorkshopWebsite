import Link from "next/link"
import { Download,Link as LinkIcon, Github, Linkedin, FileText, Code, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const teamMembers = [
    {
      name: "Harsh Raj A",
      linkedin: "www.linkedin.com/in/a-harshraj",
    },
    {
      name: "Pranav Dutthan K S",
      linkedin: "https://www.linkedin.com/in/k-s-pranav/",
    },
    {
      name: "Jesna Binu Mancherikalam",
      linkedin: "https://www.linkedin.com/in/jesna-binu-mancherikalam-004a12323/",
    },
    {
      name: "Anu Swathi V R",
      linkedin: "https://www.linkedin.com/in/anuswathi-renugopal-92971b271/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  const resources = [
    {
      title: "Workshop Materials",
      description: "Complete set of workshop materials including presentations and documents",
      icon: FileText,
      link: "/resources/workshop-materials.zip",
    },
    {
      title: "Jupyter Notebooks",
      description: "Interactive notebooks with code examples and exercises",
      icon: Code,
      link: "/resources/notebooks.zip",
    },
    {
      title: "GitHub Repository",
      description: "Access all code samples and projects on our GitHub repo",
      icon: Github,
      link: "https://github.com/ai-ml-workshop/resources",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with abstract dark art background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract dark art background */}
          <div className="absolute inset-0 bg-black"></div>

          {/* Abstract geometric shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-[10%] left-[20%] w-64 h-64 rounded-full border border-purple-500/20 animate-spin-slow"></div>
            <div className="absolute top-[30%] left-[50%] w-96 h-96 rounded-full border border-indigo-500/20 animate-spin-slow-reverse"></div>
            <div className="absolute top-[60%] left-[30%] w-80 h-80 rounded-full border border-pink-500/20 animate-spin-medium"></div>

            {/* Abstract lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
              <div className="absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
              <div className="absolute top-[75%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
            </div>

            {/* Abstract dots */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-500/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`,
                }}
              ></div>
            ))}
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
            Artificial Intelligence:
            A tech of future and now
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Explore the fascinating world of Machine Learning and Artificial Intelligence
          </p>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" /> Download Materials
            </Button>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Workshop Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
                <Card
                    key={index}
                    className="bg-gray-900/60 border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                >
                  <CardHeader>
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription className="text-gray-400">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    {resource.title === "GitHub Repository" ? (
                        <Link href={resource.link} className="w-full" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                            <LinkIcon className="mr-2 h-4 w-4" /> Visit
                          </Button>
                        </Link>
                    ) : (
                        <a href={resource.link} download className="w-full">
                          <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                            <Download className="mr-2 h-4 w-4" /> Download
                          </Button>
                        </a>
                    )}
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-900/60 p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                      >
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Query Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract background for query section */}
          <div className="absolute top-[10%] right-[20%] w-72 h-72 rounded-full border border-purple-500/10 animate-spin-slow"></div>
          <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full border border-indigo-500/10 animate-spin-medium"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Have Questions?
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-purple-400 mr-3" />
              <p className="text-lg">
                Contact us at:{" "}
                <a href="mailto:eyeharshraj@gmail.com" className="text-purple-400 hover:text-purple-300 underline">
                  eyeharshraj@gmail.com
                </a>
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800/70 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800/70 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Question"
                  className="bg-gray-800/70 border-gray-700 focus:border-purple-500 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 text-lg">Made with ❤️ by CodeCrafters.AI</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="https://github.com/ai-ml-workshop"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
