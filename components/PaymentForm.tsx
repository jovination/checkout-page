"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CreditCard, Building2, Gift } from "lucide-react"
import PricingPanel from "@/components/PricingPanel"
import Image from "next/image"

const paymentMethods = [
  {
    id: "credit-card",
    icon: <CreditCard className="h-5 w-5" />,
    title: "Credit Card",
  },
  {
    id: "bank-transfer",
    icon: <Building2 className="h-5 w-5" />,
    title: "Bank Transfer",
  },
  {
    id: "cosmic-points",
    icon: <Gift className="h-5 w-5" />,
    title: "Cosmic Points",
  },
] as const

export default function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = React.useState<string>("credit-card")
  const [formData, setFormData] = React.useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    zipCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 p-6 lg:grid-cols-2 bg-white rounded-xl shadow-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2">
        <svg  className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.95-11a2.5 2.5 0 0 1 4.064-1.41l1.701-1.133A4.5 4.5 0 0 0 8.028 11H7v2h1.027a4.5 4.5 0 0 0 7.788 2.543l-1.701-1.134A2.5 2.5 0 0 1 10.05 13l4.95.001v-2h-4.95z" fill="#8d55fe" class="fill-000000"></path></svg>          

          <span className="text-xl text-[#8D55FE] font-bold mt-1">Untitled</span>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Upgrade to Plus</h2>
          <p className="text-gray-500">Do more with unlimited blocks, files, automations & integrations.</p>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium">Billed To</Label>
          <Input
            name="name"
            placeholder="Account Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-10"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium">Payment Details</Label>
          <div className="grid grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-gray-50 ${
                  selectedMethod === method.id ? "border-[#8D55FE] bg-[#f5f2ff]" : "border-gray-200"
                }`}
              >
                {method.icon}
                <span className="mt-2 text-sm">{method.title}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedMethod === "credit-card" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <Input
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full h-10"
            />
            <div className="grid grid-cols-3 gap-4">
              <Input
               name="expiry" placeholder="MM/YY" 
               value={formData.expiry} 
               onChange={handleInputChange}
               className="h-10"
                />
              <Input 
              name="cvc" 
              placeholder="CVC" 
              value={formData.cvc} 
              onChange={handleInputChange} 
              className="h-10"

              />
              <Input 
              name="zipCode"
               placeholder="ZIP"
                value={formData.zipCode} 
                onChange={handleInputChange}
                className="h-10"
                 />
            </div>
          </motion.div>
        )}

        <div className="flex gap-4">
          <Button 
          variant="outline"
          className="w-full h-10">
            Cancel
          </Button>
          <Button 
          className="w-full h-10 bg-[#8d55fe] hover:bg-[#8d55fe]/30"
          >Subscribe</Button>
        </div>

        <p className="text-xs text-gray-500">
          By providing your card information, you allow us to charge your card for future payment in accordance with
          their terms.
        </p>
      </motion.div>

      <PricingPanel />
    </div>
  )
}

