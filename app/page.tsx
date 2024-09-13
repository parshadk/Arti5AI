"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrainCircuit,
  Sparkles,
  Zap,
  Rocket,
  Check,
  Globe,
  BarChart,
  ShieldCheck,
  UserPlus,
  CloudUpload,
  Heart,
  Edit
} from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const goToDashboard = () => {
    router.push("/dashboard");
  };

  const gotoAbout = () => {
    router.push("/dashboard/about");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="hidden px-4 lg:px-6 h-14 sm:flex items-center bg-slate-300">
        <Link
          className="flex items-center justify-center text-white p-1 bg-black rounded-full cursor-pointer hover:scale-110 transition-all"
          href="#"
        >
          <span className=" text-xl font-bold text-white p-1">Arti5AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline p-2 text-white underline-offset-4 bg-black rounded-full cursor-pointer hover:scale-110 transition-all"
            href="/dashboard"
          >
            Get Started
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-200   via-indigo-200 via-blue-200 to-blue-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Stunning Content with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Arti5AI empowers you to generate high-quality content in
                  seconds. Boost your productivity and creativity with our
                  advanced AI technology.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  onClick={goToDashboard}
                  className="cursor-pointer hover:scale-110 transition-all border bg-primary p-5 rounded-full  text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500"
                >
                  Get Started
                </Button>
                <Button
                  onClick={gotoAbout}
                  variant="outline"
                  className="cursor-pointer hover:scale-110 transition-all border  p-5 rounded-full   text-center text-sm font-medium  text-black hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-300 "
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <Sparkles className="h-14 w-14 text-primary mb-4 " />
                  <CardTitle>AI-Powered Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate unique and engaging content with our state-of-the-art
                  AI algorithms.
                </CardContent>
              </Card>
              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <Zap className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  Get your content in seconds, not hours. Save time and boost
                  your productivity.
                </CardContent>
              </Card>
              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <Rocket className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>SEO Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI ensures your content is optimized for search engines,
                  helping you rank higher.
                </CardContent>
              </Card>
              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <Globe className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Multilingual Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Create content in multiple languages with ease to reach a
                  global audience.
                </CardContent>
              </Card>

              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <BarChart className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Detailed Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Track the performance of your content with detailed insights
                  and analytics.
                </CardContent>
              </Card>

              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <ShieldCheck className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Your data is safe with us, protected by state-of-the-art
                  encryption methods.
                </CardContent>
              </Card>

              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <CloudUpload className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Cloud Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  All your content is securely stored and accessible from
                  anywhere, anytime.
                </CardContent>
              </Card>

              <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
                <CardHeader>
                  <Edit className="h-14 w-14 text-primary mb-4" />
                  <CardTitle>Customizable Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  Choose from a variety of customizable templates to suit your
                  content needs.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-300"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center   md:gap-8 ">
              {["Basic", "Pro"].map((plan) => (
                <Card
                  key={plan}
                  className="flex flex-col justify-between h-full hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-105 transition-all"
                >
                  <CardHeader>
                    <CardTitle>{plan}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-4xl font-bold mb-4">
                      {plan === "Basic"
                        ? "Free"
                        : plan === "Pro"
                        ? "$3.59"
                        : "Custom"}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "10000 words",
                        "50+ Templates",
                        "1 Month History",
                        ...(plan !== "Basic"
                          ? ["100000 words", "More templates"]
                          : []),
                      ].map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardContent>
                    <Button className="cursor-pointer hover:scale-105 transition-all w-full border bg-primary p-5 rounded-full   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500 ">
                      {plan === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 via-blue-50 to-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Content?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of content creators who are already using
                  Arti5AI to produce amazing content.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 ">
                <Button
                  type="submit"
                  onClick={goToDashboard}
                  className="border bg-primary p-5 rounded-full   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500 cursor-pointer hover:scale-110 transition-all"
                >
                  Get Started
                </Button>

                <p className="text-xs text-gray-600">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-500">
        <p className="text-xs text-gray-600">
          © 2024 Arti5AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-2 sm:gap-6">
          <Link
            className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500 cursor-pointer hover:scale-110 transition-all"
            target="_blank"
            href="https://github.com/parshadk"
          >
            <Github />
          </Link>
          <Link
            className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500 cursor-pointer hover:scale-110 transition-all "
            target="_blank"
            href="https://www.linkedin.com/in/parshad-keni/"
          >
            <Linkedin />
          </Link>
          <Link
            className="text-xs p-1 border bg-primary rounded-full   text-center   text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500 cursor-pointer hover:scale-110 transition-all"
            target="_blank"
            href="https://x.com/_parshad_1694"
          >
            <Twitter />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
