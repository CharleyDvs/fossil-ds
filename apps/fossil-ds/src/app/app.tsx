import styles from './app.module.scss';
import { SideMenu, CustomList, CollapseListOption } from '@fossil-ds/fossil-ui';
import { Switch, Route, useHistory } from 'react-router-dom';
import { HiHome, HiCog } from 'react-icons/hi';

const Home = () => <h1>Hello World</h1>;

const Menulist = () => {
  const history = useHistory();

  const menuItems: CollapseListOption[] = [
    {
      icon: <HiHome />,
      text: 'Home',
      clickHandler: () => {
        history.push('home');
      },
    },
    {
      icon: <HiCog />,
      isCollapse: true,
      text: 'Components',
      collapseListItems: [
        {
          icon: HiHome,
          text: 'Button',
          clickHandler: () => {
            history.push('button');
          },
        },
      ],
    },
  ];

  return <CustomList listItems={menuItems} />;
};

export function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:page">
          <SideMenu menuList={<Menulist />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
