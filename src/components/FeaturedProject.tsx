import { formatTools } from "../utils/utils";

interface FeaturedProjectProps {
  title: string;
  description: string;
  tools: string[];
  githubLink: string;
  siteLink: string;
}

export default function FeaturedProject({ title, description, tools, githubLink, siteLink }: FeaturedProjectProps) {
  const formattedTools = formatTools(tools);

  return (
    <div className="flex justify-between py-3 px-2">
      {/* Details */}
      <div className="self-end">
        <a href={siteLink} target="_blank" className="text-[#eeeeee] font-normal text-base">
          {title}
        </a>
        <p className="text-[#aaaaaa] font-normal text-sm  w-[90%]">{description}</p>

        {/* Tools and Links */}
        <div className="flex justify-between">
          <p className="sm:text-sm text-xs text-[#6e6e6e] mt-2">{formattedTools}</p>

          {/* Link and Github */}
          <div className="flex self-end">
            <a href={githubLink} target="_blank" className="self-center mr-2">
              <img src="/github-alt.svg" className="" alt="link to github" width="20" height="20" />
            </a>
            <a href={siteLink} target="_blank" className="self-center">
              <img src="/external-link.svg" className="" alt="link to site" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
