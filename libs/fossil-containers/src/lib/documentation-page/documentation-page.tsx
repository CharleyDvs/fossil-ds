import { useParams } from 'react-router-dom'
import { Documentation } from '@fossil-ds/fossil-documentation'

interface ParamsProps {
  componentName: string
}

export const DocumentationPage = () => {
  const { componentName } = useParams<ParamsProps>()

  return <Documentation component={componentName} />
}
