import { formatTools } from "../utils/utils";

interface OtherProjectProps {
  title: string;
  tools: string[];
  githubLink: string;
  siteLink: string;
}

export default function OtherProject({ title, tools, githubLink, siteLink }: OtherProjectProps) {
  const formattedTools = formatTools(tools);

  return (
    <div className="flex justify-between py-3 px-2">
      {/* Details */}
      <div className="self-end w-full">
        <a href={siteLink} target="_blank" className="text-[#eeeeee] font-normal text-base">
          {title}
        </a>

        {/* Tools and Links */}
        <div className="flex justify-between">
          <p className="sm:text-sm text-xs text-[#6e6e6e]">{formattedTools}</p>

          {/* Link and Github */}
          <div className="flex self-end">
            <a href={githubLink} target="_blank" className="self-center mr-2">
              <img src="/github-alt.svg" className="" alt="github logo" width="20" height="20" />
            </a>
            <a href={siteLink} target="_blank" className="self-center">
              <img src="/external-link.svg" className="" alt="github logo" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
