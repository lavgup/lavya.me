import Container from 'components/Container';
import { InferGetStaticPropsType } from 'next';
import { getProjects } from '../lib/notion';

export default function Home({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Container rss>
			<div>
				<h1 className="text-4xl font-bold transform-gpu">
					Hi, I'm{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04D4D] to-[#e6c02c]">
						Lav.
					</span>
				</h1>
				<p className="mt-4">
					I'm an Australian student, badminton player and hobby software developer.
					I'm currently working on multiple projects, but in my free time I enjoy exploring the web, reading,
					and enjoying time with friends and family.
				</p>

				<a
					href="mailto:lavyag01@gmail.com"
					className="mt-4 inline-block px-2.5 py-1.5 rounded-lg text-orange-800/80 dark:text-orange-300/90 bg-orange-300/[.33] hover:bg-orange-400/[.33] dark:bg-orange-400/20 hover:dark:bg-orange-400/[.275]"
				>
					Contact me
				</a>
			</div>

			<div className="mt-10">
				<h2 className="text-2xl font-bold transform-gpu">
					Projects
				</h2>

				<div className="flex flex-col mt-2 gap-2">
					{projects.reverse().map((el, idx) => (
						<ProjectCard
							key={idx}
							project={el}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}

function ProjectCard({ project }: { project: InferGetStaticPropsType<typeof getStaticProps>['projects'][number] }) {
	return (
		<a
			href={project.url}
			className="w-full p-3 border border-2 border-orange-500/30 bg-orange-200/20 dark:bg-orange-600/10 dark:border-orange-600/40 rounded-md"
		>
			<h3 className="text-lg font-bold tracking-tight dark:text-orange-200/90">
				{project.name}
			</h3>
			<p className="mt-2 text-gray-700 dark:text-[#FAA274]/70">
				{project.description}
			</p>
		</a>
	);
}

export async function getStaticProps() {
	const projects = await getProjects(process.env.NOTION_PROJECTS_ID as string, 3);

	return {
		props: { projects }
	};
}
