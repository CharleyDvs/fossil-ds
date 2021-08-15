import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export interface ListOption {
  index?: number;
  icon?: React.ReactNode;
  text?: string;
  url?: string;
}

export interface CollapseListOption extends ListOption {
  isCollapse?: boolean;
  collapseListItems?: ListOption[];
}

/* eslint-disable-next-line */
export interface CustomListProps {
  listItems: CollapseListOption[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
  })
);

export const CustomList = ({ listItems }: CustomListProps): JSX.Element => {
  const classes = useStyles();

  const ListOption = ({ url = '', icon, index, text }: ListOption) => (
    <Link key={`${text}-${index}`} to={url} className={classes.link}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
  const CollapsableList = ({
    icon,
    text,
    collapseListItems,
  }: CollapseListOption) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {collapseListItems?.map((props: ListOption, index: number) => (
              <ListOption index={index} {...props} />
            ))}
          </List>
        </Collapse>
      </div>
    );
  };

  return (
    <List>
      {listItems.map(({ isCollapse, ...props }, index: number) =>
        isCollapse ? (
          <CollapsableList index={index} {...props} />
        ) : (
          <ListOption index={index} {...props} />
        )
      )}
    </List>
  );
};

export default CustomList;
