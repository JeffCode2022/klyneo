"use client"

import { useUI } from "@/components/providers/ui-provider"
import { StellarBackground } from "@/components/ui/stellar-background"
import { StudentDashboard } from "@/components/dashboard/student-dashboard"
import { CompanyDashboard } from "@/components/dashboard/company-dashboard"

export default function DashboardPage() {
    const { userType } = useUI()

    return (
        <div className="min-h-screen relative pt-24 pb-12 px-4 md:px-8">
            <StellarBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                {userType === "company" ? <CompanyDashboard /> : <StudentDashboard />}
            </div>
        </div>
    )
}
