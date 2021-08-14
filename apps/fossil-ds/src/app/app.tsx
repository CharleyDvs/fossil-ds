import styles from './app.module.scss';
import { SideMenu } from '@fossil-ds/fossil-ui';

export function App() {
  return (
    <div className={styles.app}>
      <SideMenu headerTitle="Fossil DS" headerSub="Home">
        <h1>Hello world!</h1>
      </SideMenu>
    </div>
  );
}

export default App;
