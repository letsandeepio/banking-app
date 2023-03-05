import {
  BanknotesIcon, ChartBarIcon,
  DocumentArrowUpIcon, HomeIcon, PaperAirplaneIcon,
  PresentationChartBarIcon
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "My Accounts", href: "#", icon: HomeIcon, current: true },
  { name: "Pay Bills", href: "#", icon: BanknotesIcon, current: false },
  { name: "Transfers", href: "#", icon: DocumentArrowUpIcon, current: false },
  { name: "Interac e-transfer", href: "#", icon: PaperAirplaneIcon, current: false },
  { name: "Investments", href: "#", icon: PresentationChartBarIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
