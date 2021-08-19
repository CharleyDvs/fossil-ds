import { useParams } from 'react-router-dom'
import { Documentation as DocumentationComp } from '@fossil-ds/fossil-documentation'
interface ParamsProps {
  componentName: string
}

export const Documentation = () => {
  const { componentName } = useParams<ParamsProps>()

  return <DocumentationComp fileName={componentName} />
}
