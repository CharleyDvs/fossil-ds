import {
  SideMenu as FossilSideMenu,
  CustomList,
  CollapseListOption,
} from '@fossil-ds/fossil-ui';
import { HiHome, HiCog, HiColorSwatch } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

const Menulist = () => {
  const { push } = useHistory();

  const menuItems: CollapseListOption[] = [
    {
      icon: <HiHome />,
      text: 'Home',
      clickHandler: () => {
        push('/');
      },
    },
    {
      icon: <HiCog />,
      isCollapse: true,
      text: 'Components',
      collapseListItems: [
        {
          text: 'Button',
          clickHandler: () => {
            push('/components/button');
          },
        },
      ],
    },
    {
      icon: <HiColorSwatch />,
      text: 'Colors',
      clickHandler: () => {
        push('/colors');
      },
    },
  ];

  return <CustomList listItems={menuItems} />;
};

export const SideMenu = () => <FossilSideMenu menuList={<Menulist />} />;
