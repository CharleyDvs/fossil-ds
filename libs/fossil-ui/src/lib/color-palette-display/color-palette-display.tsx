import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ColorDisplay } from '../color-display/color-display'

interface ColorData {
  colorCode: string
  colorName: string
}
/* eslint-disable-next-line */
export interface ColorPaletteDisplayProps {
  colorList: ColorData[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '400px',
      border: 'solid 1px #7a7a7a',
    },
  }),
)

export const ColorPaletteDisplay = ({
  colorList,
}: ColorPaletteDisplayProps) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      {colorList.map((color, idx) => (
        <ColorDisplay
          key={`${color.colorName}-${idx}`}
          colorCode={color.colorCode}
          colorName={color.colorName}
        />
      ))}
    </div>
  )
}
