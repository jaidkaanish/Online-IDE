import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {
  const CHEKOUT_URL =
    "https://onlineideajdev.lemonsqueezy.com/buy/4f1915c7-8dda-4b79-abb7-f9220397c020";

  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg 
        hover:from-orange-600 hover:to-orange-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
