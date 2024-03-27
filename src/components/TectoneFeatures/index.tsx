import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Stay Up To Date.",
    description:
      "Easy one click update across projects where there is a new version.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Local Development.",
    description:
      "Have all your projects under one roof and managed from a central place locally.",
    icon: LockClosedIcon,
  },
  {
    name: "Fast Development Experience.",
    description:
      "Leave the tedious terminal commands, and focus on your development with Tectone Desktop.",
    icon: ArrowPathIcon,
  },
];

export default function TectoneFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-400">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Tectone Desktop
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Your command center for developing on top of T-Core Tectone
            Blockchain.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/img/tectone-desktop.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="block font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="inline">{feature.description.trimStart()}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
