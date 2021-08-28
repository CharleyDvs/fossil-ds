import {
  MDXProvider as ProviderComponent,
  MDXProviderProps,
} from '@mdx-js/react'

interface ProviderComponentProps {
  children: React.ReactNode
}

const components = {
  pre: (props: MDXProviderProps) => <div {...props} />,
  code: (props: MDXProviderProps) => <pre {...props} />,
}

export const MDXProvider = ({ children }: ProviderComponentProps) => (
  <ProviderComponent components={components}>{children}</ProviderComponent>
)
