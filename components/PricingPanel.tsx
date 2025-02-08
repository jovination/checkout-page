"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

function PricingPanel() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl bg-[#E2E6E9] pb-6 md:pb-0 pt-6 space-y-4 md:space-y-6"
    >
      <h3 className="px-6 text-base md:text-lg font-semibold">Starter Plan</h3>

      <div className="space-y-3 px-6">
        <Card
          className={`cursor-pointer p-3 md:p-4 transition-colors hover:bg-gray-100 ${
            billingCycle === "monthly" ? "border-purple-600" : ""
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          <div className="flex items-center gap-2">
            <div
              className={`h-4 w-4 rounded-full border-2 ${
                billingCycle === "monthly" ? "border-purple-600 bg-purple-600" : "border-gray-300"
              }`}
            />
            <div>
              <div className="text-sm md:text-base font-medium">Pay Monthly</div>
              <div className="text-xs md:text-sm text-gray-500">$20 / Month / Member</div>
            </div>
          </div>
        </Card>

        <Card
          className={`cursor-pointer p-3 md:p-4 transition-colors hover:bg-[#f5f2ff] ${
            billingCycle === "annual" ? "border-[#8D55FE] bg-purple-50" : ""
          }`}
          onClick={() => setBillingCycle("annual")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded-full border-2 ${
                  billingCycle === "annual" ? "border-purple-600 bg-purple-600" : "border-gray-300"
                }`}
              />
              <div>
                <div className="text-sm md:text-base font-medium">Pay Annual</div>
                <div className="text-xs md:text-sm text-gray-500">$16 / Month / Member</div>
              </div>
            </div>
            <span className="rounded bg-[#8D55FE] px-2 py-1 text-xs text-white font-medium">Save 20%</span>
          </div>
        </Card>
      </div>

      <div className="border-t pt-4 px-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm md:text-base font-medium">Total</span>
          <span className="text-xl md:text-2xl font-bold">
            ${billingCycle === "annual" ? "16" : "20"} / Month
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of
          security.
        </p>
      </div>

      <div className="hidden md:flex justify-end">
        <div className="relative w-full md:w-[700px] h-[300px] md:h-[500px] overflow-hidden rounded-xl ml-auto">
          <Image
            src="/bg.png"
            alt="Collaborative workspace"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PricingPanel