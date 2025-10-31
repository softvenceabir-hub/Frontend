import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="lg:pt-40 w-full pt-50">
    
         <div className=" bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 dark:text-blue-400"
        >
          About Our Pharmacy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Welcome to <span className="font-semibold text-blue-600">HealthCare+</span>, 
          your trusted online pharmacy where quality meets care.  
          We’re committed to making healthcare accessible, safe, and affordable — 
          delivering genuine medicines right to your doorstep.
        </motion.p>

        {/* Mission / Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="shadow-lg border-0 bg-white/90 dark:bg-gray-900/60">
            <CardContent className="p-8 space-y-3">
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                To empower every individual with easy access to authentic medicines and health products.  
                We believe healthcare is a right, not a privilege — and our mission is to make it reachable for everyone, everywhere.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/90 dark:bg-gray-900/60">
            <CardContent className="p-8 space-y-3">
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                To be the most trusted online pharmacy brand that combines technology and compassion — 
                ensuring health, happiness, and hope for every customer we serve.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Integrity",
                desc: "We only provide genuine, high-quality medicines from verified suppliers.",
              },
              {
                title: "Compassion",
                desc: "We understand your needs and treat every order with care and empathy.",
              },
              {
                title: "Innovation",
                desc: "We continuously improve our digital pharmacy to make healthcare easier.",
              },
            ].map((val, idx) => (
              <Card key={idx} className="bg-white/80 dark:bg-gray-900/60 border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Need Help or Have a Prescription?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
            Our licensed pharmacists are ready to assist you with any medical questions 
            or prescription requirements — because your health is our priority.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Contact Our Pharmacist
          </Button>
        </div>
      </div>
    </div>

      
    </div>
  )
}

export default AboutUs
