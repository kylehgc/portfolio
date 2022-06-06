import { NextPage } from 'next/types'
import { useRouter } from 'next/router'
import { Projects } from '../../Data/projects'
import Project from '../../Components/Project'
import Nav from '../../Components/Nav'
import { Fade, ScaleFade, SlideFade } from '@chakra-ui/react'
const ProjectPage: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	if (typeof id === 'string') {
		if (id in Projects) {
			return (
				<>
					<ScaleFade
						in
						initialScale={0.9}
						transition={{
							enter: { duration: 0.4 },
						}}
					>
						<Project project={Projects[id]} />
					</ScaleFade>
				</>
			)
		}
	}
	return <></>
}

export default ProjectPage
