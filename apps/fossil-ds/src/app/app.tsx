import styles from './app.module.scss';
import { SideMenu } from '@fossil-ds/fossil-ui';
import { Switch, Route } from 'react-router-dom';

const Home = () => <h1>Hello World</h1>;

export function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:page">
          <SideMenu>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              neque consectetur deserunt, ducimus soluta expedita unde eius
              corporis provident blanditiis vero aliquid quam molestias
              architecto id esse accusantium omnis odit? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto esse distinctio
              debitis. Temporibus iste sit exercitationem fuga repellendus quam
              consequatur nulla iure dolorum repudiandae? Optio unde hic eius
              autem iusto.
            </p>
          </SideMenu>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
