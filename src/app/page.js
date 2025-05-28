"use client"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-8 md:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Information you need during <br className="hidden md:block" />
              <span className="md:hidden">on-call emergencies</span>
              <span className="hidden md:inline">on-call emergencies</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Quickly find the most relevant information and incidents with clear visualizations. All the context you
              need during high-stress situations.
            </p>

            <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold">
              Get started
              <img src="/Vector.png" alt="arrow right" className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-8 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <img src="/imagenperfil.png" alt="Imagen estadisticas" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16">
              <span className="md:hidden">
                Immediate Solutions,
                <br />
                Less Stress
              </span>
              <span className="hidden md:inline">Quick solutions, less stress</span>
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-8">              
              <div className="text-center md:text-center">
                <div className="flex justify-center mb-4">
                  <div className="border border-white p-3 md:p-4 rounded-lg">
                    <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Fix emergencies fast</h3>
                <p className="text-gray-400 text-sm md:text-base px-4 md:px-0">
                  <span className="md:hidden text-white">
                    Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks.
                  </span>
                  <span className="hidden md:inline text-white">
                    Get to the root cause quickly with intelligent alerts and automated workflows that reduce mean time
                    to resolution.
                  </span>
                </p>
              </div>              
              <div className="text-center md:text-center">
                <div className="flex justify-center mb-4">
                  <div className="border border-white p-3 md:p-4 rounded-lg">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Universally compatible</h3>
                <p className="text-gray-400 text-sm md:text-base px-4 md:px-0">
                  <span className="md:hidden text-white">
                    Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system.
                  </span>
                  <span className="hidden md:inline">
                    Works with your existing tools and infrastructure. Seamless integration with popular monitoring and
                    alerting platforms.
                  </span>
                </p>
              </div>              
              <div className="text-center md:text-center">
                <div className="flex justify-center mb-4">
                  <div className="border border-white p-3 md:p-4 rounded-lg">
                    <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Secure for your org</h3>
                <p className="text-gray-400 text-sm md:text-base px-4 md:px-0">
                  <span className="md:hidden text-white">We keep your data safe by taking top security measures.</span>
                  <span className="hidden md:inline">
                    Enterprise-grade security with SOC 2 compliance, role-based access controls, and end-to-end
                    encryption.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Instant setup, no custom code</h2>
            <p className="text-base md:text-lg text-gray-300 px-2">
              <span className="md:hidden">
                Invite the bot, pick a channel, and you are set—no custom code needed, and no vendor lock-in.
              </span>
              <span className="hidden md:inline">
                Install the app, pick a channel, and you are set! No custom code needed, and no complex configuration
                required.
              </span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img src="/imagenperfil.png" alt="Imagen estadisticas" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">Request a demo, or hop on a call.</p>
            <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold">
              Get started
              <img src="/Vector.png" alt="arrow right" className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
