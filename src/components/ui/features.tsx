import React from "react";
import Container from "./container";
// import { Icon } from "lucide-react";
import { Icon } from "@iconify/react";
import Title from "./title";
import { Link } from "lucide-react";

export default function Features() {
  return (
    <div>
      <div id="features">
        <Container>
          <div>
            <Title
              className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl"
              heading="Your Trusted Source on Canadian Immigration"
              subtext={
                <p className="w-[60%] text-center mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  incidunt nam itaque sed eius modi error totam sit illum. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Natus ad
                  ipsum pariatur autem, fugit laborum in atque amet obcaecati?
                  Nisi minima aspernatur, quidem nulla cupiditate nam
                  consequatur eligendi magni adipisci.
                </p>
              }
              level="h4"
            />
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {featuresList.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  link,
  icon,
}: {
  title?: string;
  description?: string;
  link?: string;
  icon?: string;
}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8">
        <Icon icon={icon} className="text-6xl text-secondary" />

        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            {title}
          </h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const featuresList = [
  {
    id: 1,
    title: "Immigrate to Canada",
    description:
      "Make your goal of moving to Canada a reality by exploring over 100 available ways to immigrate.",
    link: "/immigrate-to-canada",
    type: "information",
    icon: "material-symbols:googler-travel",
  },
  {
    id: 2,
    title: "Canadian Work Permits",
    description:
      "Find out if you need a Canadian temporary work permit to work in Canada and how to obtain one.",
    link: "/canadian-work-permits",
    type: "permit",
    icon: "mdi:briefcase-account-outline",
  },
  {
    id: 3,
    title: "Family Sponsorship",
    description:
      "Find ways to bring your family members from abroad to live in Canada as permanent residents.",
    link: "/family-sponsorship",
    type: "sponsorship",
    icon: "carbon:pedestrian-family",
  },

  {
    id: 4,
    title: "Study in Canada",
    description:
      "Study in Canada to increase your chances of immigrating as a skilled worker.",
    link: "/study-in-canada",
    type: "study",
    icon: "ph:student",
  },
];
