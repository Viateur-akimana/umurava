import Image from "next/image";
import React from "react";

interface Step {
    id: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        id: 1,
        title: "As Career Development and Job Readiness Program",
        description: "",
    },
    {
        id: 2,
        title: "As Skills Assessments Method after a course or a term",
        description: "",
    },
    {
        id: 3,
        title: "As extracurricular activities to complement academic courses",
        description: "",
    },
    {
        id: 4,
        title: "As the portfolio of the Students",
        description: "",
    },
    {
        id: 5,
        title: "As part of Capstone Projects or final-year assignments",
        description: "",
    },
];

const Step: React.FC<{ step: Step }> = ({ step }) => (
    <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full">
            {step.id}
        </div>
        <p className="text-gray-700 font-semibold">{step.title}</p>
    </div>
);

const IntegrationSteps: React.FC = () => {
    return (
        <div className="p-6 lg:p-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">
                How Skills Challenges Program can Be Integrated into your Learning Institution
            </h2>
            <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
                    <div className="flex flex-col gap-2">
                        {steps.map((step) => (
                            <Step key={step.id} step={step} />
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/benefits.png"
                        alt="Integration Illustration"
                        width={450}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntegrationSteps;