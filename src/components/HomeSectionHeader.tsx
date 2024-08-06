// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export type THomeSectionHeader = {
	section: string,
	title: string,
	content?: string,
	className?: string,
}

const HomeSectionHeader = ({
	section,
	title,
	content = "",
	className = "",
}: THomeSectionHeader) => (
	<section className={`flex flex-col px-5 lg:px-16 pb-[64px] gap-5 lg:whitespace-pre-wrap ${className}`}>
			<span className="text-[22px] font-semibold">{section}</span>
      <span className="text-[36px] font-semibold">
        {title}
      </span>
			{content &&
				<span className="text-[20px]">
					{content}
				</span>
			}
	</section>
)

export default HomeSectionHeader;