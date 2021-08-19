import { useParams } from 'react-router-dom'
import { Documentation as FossilDocumentation } from '@fossil-ds/fossil-documentation'
interface ParamsProps {
  componentName: string
}

export const Documentation = () => {
  const { componentName } = useParams<ParamsProps>()

  return <FossilDocumentation component={componentName} />
}
