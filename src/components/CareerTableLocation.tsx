// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export type TCareerLocationData = {
	city: string,
	country?: string
}

export type TCareerTableLocation = {
	locations: TCareerLocationData[]
}

const CareerTableLocation = ({
	locations,
}: TCareerTableLocation) => (
	<div className="flex flex-col w-full lg:w-auto lg:max-w-[400px] gap-4">
		{locations.map((location, index) => (
			location.country ? 
				<div key={location.city} className="flex text-lg whitespace-break-spaces">
					<span className="font-semibold">{`${location.city} `}</span>
					<span className=" whitespace-nowrap">{`- ${location.country}${index === locations.length - 1 ? "" : ","}`}</span>
				</div>
				: 
					<span key={location.city} className="font-semibold text-lg">{`${location.city}${index === locations.length - 1 ? "" : ","}`}</span>
		))}
	</div>
)

export default CareerTableLocation