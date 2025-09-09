import Hero from "@/components/hero"
import Services from "@/components/services"
import MembershipSection from "@/components/membership-section"
import FinancialSupport from "@/components/financial-support"
import ManagementPlan from "@/components/management-plan"
import DataAnalysis from "@/components/data-analysis"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <ManagementPlan />
      <MembershipSection />
      <FinancialSupport />
      <DataAnalysis />
      <ContactForm />
    </div>
  )
}
