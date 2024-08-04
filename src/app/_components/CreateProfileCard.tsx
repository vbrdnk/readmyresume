import {
  BriefcaseIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

type CardItem = {
  name: string;
  description: string;
  iconColor: string;
  icon: typeof BriefcaseIcon;
};

const items: Array<CardItem> = [
  {
    name: "Work Experience",
    description: "Add the basics, like work experience or education.",
    iconColor: "bg-pink-500",
    icon: BriefcaseIcon,
  },
  {
    name: "Hobbies",
    description:
      "Add the stuff you're passionate about, like side projects or writing",
    iconColor: "bg-purple-500",
    icon: CommandLineIcon,
  },
  {
    name: "Portfolio",
    description:
      "Add images or case studies to any experiences that need more detail.",
    iconColor: "bg-yellow-500",
    icon: GlobeAltIcon,
  },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateProfileCard() {
  return (
    <div className="overflow-hidden sm:rounded-lg border-gray-600 border rounded-xl bg-transparent p-6">
      <div className="mx-auto max-w-lg">
        <h2 className="text-base font-semibold leading-6 text-white">
          Welcome to your new profile!
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Get started by adding a basic profile information about yourself.
        </p>
        <ul role="list" className="mt-6">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>
              <div className="group relative flex items-start space-x-3 py-4">
                <div className="flex-shrink-0">
                  <span
                    className={classNames(
                      item.iconColor,
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-200">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="mt-4 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition duration-150 hover:ease-in hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add your first work experience
      </button>
    </div>
  );
}
