"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Users,
  Briefcase,
  DollarSign,
  Clock,
  Plane,
} from "lucide-react";
import Title from "./title";
import Container from "./container";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const immigrationSteps: Step[] = [
  {
    id: "eligibility",
    title: "Determine Eligibility",
    description:
      "Review various immigration programs to find the best fit for your profile.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    id: "documents",
    title: "Gather Documents",
    description: "Collect all necessary documentation for your application.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "apply",
    title: "Submit Application",
    description:
      "Submit your application through the appropriate channel based on your chosen program.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: "fees",
    title: "Pay Fees",
    description: "Pay all required application and processing fees.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    id: "wait",
    title: "Wait for Processing",
    description:
      "Track your application status online through your IRCC account.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: "prepare",
    title: "Prepare for Arrival",
    description:
      "If your application is successful, prepare for your move to Canada.",
    icon: <Plane className="w-6 h-6" />,
  },
];

const colors = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

const TimelineNode: React.FC<{
  step: Step;
  index: number;
  totalSteps: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  color: string;
}> = ({ step, index, totalSteps, isActive, isCompleted, onClick, color }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2"
      style={{ left: `${(index / (totalSteps - 1)) * 100}%` }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-12 h-12 cursor-pointer"
          onClick={onClick}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="23" stroke={color} strokeWidth="2" />
          <motion.circle
            cx="24"
            cy="24"
            r="23"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: isCompleted ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <foreignObject x="0" y="0" width="48" height="48">
            <div className="flex items-center justify-center w-full h-full ">
              {React.cloneElement(step.icon as React.ReactElement, {
                className: `w-6 h-6 ${
                  isCompleted ? "text-white" : `text-${color}`
                }`,
              })}
            </div>
          </foreignObject>
        </svg>
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center w-24">
          {step.title}
        </div>
      </motion.div>
    </div>
  );
};

const TimelineLine: React.FC<{
  start: number;
  end: number;
  totalSteps: number;
  progress: number;
  color: string;
}> = ({ start, end, totalSteps, progress, color }) => {
  const startX = (start / (totalSteps - 1)) * 100;
  const endX = (end / (totalSteps - 1)) * 100;

  return (
    <svg
      className="absolute top-6 left-0 w-full h-0.5"
      preserveAspectRatio="none"
    >
      <line
        x1={`${startX}%`}
        y1="0"
        x2={`${endX}%`}
        y2="0"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <motion.line
        x1={`${startX}%`}
        y1="0"
        x2={`${endX}%`}
        y2="0"
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  );
};

// Your existing `immigrationSteps` and other constants...

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation effect
  useEffect(() => {
    if (!inView) return; // Only run the animation when in view

    const totalSteps = immigrationSteps.length;

    if (activeStep < totalSteps) {
      setIsAnimating(true);
      const animationDuration = 2000; // 2 seconds
      const startTime = Date.now();

      const animateLine = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        setAnimationProgress(progress);

        if (progress < 1) {
          requestAnimationFrame(animateLine);
        } else {
          setIsAnimating(false);
          setCompletedSteps((prev) => [...prev, activeStep]);

          if (activeStep === totalSteps - 1) {
            // Restart the loop
            setActiveStep(0);
            setCompletedSteps([]);
          } else {
            setActiveStep((prev) => prev + 1);
          }
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animateLine);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeStep, inView]);

  return (
    <Container>
      <div ref={sectionRef} className="process-section">
        <Title
          heading="Canada Immigration Process"
          subtext=""
          level="h1"
          className="text-4xl pb-20"
        />
        <div className="rounded-3xl shadow-xl px-28 py-12 mb-8 relative">
          <div className="h-40 relative mb-16">
            {immigrationSteps.map((step, index) => (
              <TimelineNode
                key={step.id}
                step={step}
                index={index}
                totalSteps={immigrationSteps.length}
                isActive={index === activeStep}
                isCompleted={completedSteps.includes(index)}
                onClick={() => handleStepClick(index)}
                color={colors[index % colors.length]}
              />
            ))}
            {immigrationSteps.map(
              (_, index) =>
                index < immigrationSteps.length - 1 && (
                  <TimelineLine
                    key={index}
                    start={index}
                    end={index + 1}
                    totalSteps={immigrationSteps.length}
                    progress={
                      index < activeStep
                        ? 1
                        : index === activeStep
                        ? animationProgress
                        : 0
                    }
                    color={colors[index % colors.length]}
                  />
                )
            )}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white rounded-xl px-6 py-4 "
              style={{ backgroundColor: colors[activeStep % colors.length] }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {immigrationSteps[activeStep].title}
              </h2>
              <p className="text-muted-foreground">
                {immigrationSteps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
}
