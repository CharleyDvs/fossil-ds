import {
  SideMenu as FossilSideMenu,
  CustomList,
  CollapseListOption,
} from '@fossil-ds/fossil-ui'
import { HiHome, HiCog, HiColorSwatch } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

const Menulist = () => {
  const { push } = useHistory()

  const menuItems: CollapseListOption[] = [
    {
      icon: <HiHome />,
      text: 'Home',
      onClick: () => {
        push('/')
      },
    },
    {
      icon: <HiCog />,
      isCollapse: true,
      text: 'Components',
      collapseListItems: [
        {
          text: 'Button',
          onClick: () => {
            push('/components/button')
          },
        },
      ],
    },
    {
      icon: <HiColorSwatch />,
      text: 'Colors',
      onClick: () => {
        push('/colors')
      },
    },
  ]

  return <CustomList listItems={menuItems} />
}

export const SideMenu = () => <FossilSideMenu menuList={<Menulist />} />
