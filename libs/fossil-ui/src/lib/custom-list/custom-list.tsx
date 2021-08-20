import { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

export interface ListOption {
  icon?: React.ReactNode
  text: string
  className?: string
  clickHandler?: () => void
}

export interface CollapseListOption extends ListOption {
  isCollapse?: boolean
  collapseListItems?: ListOption[]
}

/* eslint-disable-next-line */
export interface CustomListProps {
  listItems: CollapseListOption[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(6),
    },
  }),
)

export const CustomList = ({ listItems }: CustomListProps): JSX.Element => {
  const styles = useStyles()

  const ListOption = ({ clickHandler, icon, text, ...rest }: ListOption) => (
    <ListItem
      button
      onClick={() => {
        if (clickHandler) clickHandler()
      }}
      {...rest}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
  const CollapsableList = ({
    icon,
    text,
    collapseListItems,
  }: CollapseListOption) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
      setOpen(!open)
    }

    return (
      <>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            {collapseListItems?.map((props: ListOption, index: number) => (
              <ListOption
                key={`${props.text}-${index}`}
                className={styles.nested}
                {...props}
              />
            ))}
          </List>
        </Collapse>
      </>
    )
  }

  return (
    <List>
      {listItems.map(({ isCollapse, ...props }, index: number) =>
        isCollapse ? (
          <CollapsableList key={`${props.text}-${index}`} {...props} />
        ) : (
          <ListOption key={`${props.text}-${index}`} {...props} />
        ),
      )}
    </List>
  )
}
