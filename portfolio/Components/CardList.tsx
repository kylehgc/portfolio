import { CardData } from '../types'
import Card from './Card'
import SpringAnimation from './SpringAnimation'
interface Props {
	projects: CardData[]
}

const CardList: React.FC<Props> = ({ projects }) => {
	return (
		<>
			{projects.map((project) => (
				<Card key={project.title} CardData={project} />
			))}
		</>
	)
}

export default CardList
