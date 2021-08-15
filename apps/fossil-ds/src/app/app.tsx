import styles from './app.module.scss';
import { SideMenu, CustomList, CollapseListOption } from '@fossil-ds/fossil-ui';
import { Switch, Route } from 'react-router-dom';
import { HiHome, HiCog } from 'react-icons/hi';

const Home = () => <h1>Hello World</h1>;

const Menulist = () => {
  const menuItems: CollapseListOption[] = [
    {
      icon: <HiHome />,
      text: 'Home',
    },
    {
      icon: <HiCog />,
      isCollapse: true,
      text: 'Components',
      collapseListItems: [
        {
          icon: HiHome,
          text: 'Button',
          url: 'components/button',
        },
      ],
    },
  ];

  return <CustomList listItems={menuItems} />;
};

export function App() {
  return (
    <div className={styles.app}>
      <SideMenu menuList={<Menulist />} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/component/:componentId">
          <h1>Component</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
