import { Boxes, Database, Globe, Logs, RefreshCcw, Scaling, Shield, Workflow,  } from "lucide-react";


export const ENTERPRISE_FEATURES = [
  {
    icon: Scaling,
    label: "Scalability",
    desc: "Ability to handle large volumes of users, data, and transactions",
  },
  {
    icon: Logs,
    label: "Audit Logs",
    desc: "Detailed tracking and logging of user activity",
  },
  {
    icon: Workflow,
    label: "Real-time Sync",
    desc: "Instant synchronization across all devices",
  },
  {
    icon: Database,
    label: "Unlimited Storage",
    desc: "Store unlimited snippets and projects",
  },
];

export const FEATURES = {
  development: [
    "Cutting-edge capabilities", 
    "Custom theme builder",
    "Integrated debugging tools",
    "Multi-language support",
  ],
  collaboration: [
    "Real-time pair programming",
    "Team workspaces",
    "Version control integration",
    "Code review tools",
  ],
  deployment: [
    "One-click deployment",
    "Seamless integration",
    "Container support",
    "Custom domain mapping",
  ],
};
