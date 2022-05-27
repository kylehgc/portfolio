import { NextPage } from 'next/types'
import { useRouter } from 'next/router'
import { Projects } from '../../Data/projects'
import Project from '../../Components/Project'
const ProjectPage: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	if (typeof id === 'string') {
		if (id in Projects) {
			return <Project project={Projects[id]} />
		}
	}
	return <></>
}

export default ProjectPage
