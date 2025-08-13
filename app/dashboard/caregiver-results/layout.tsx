import { Plus_Jakarta_Sans } from 'next/font/google'
import "../../globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function CaregiverResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={plusJakartaSans.className}>{children}</div>
} 