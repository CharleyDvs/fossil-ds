import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ColorDisplay } from '../color-display/color-display'

interface ColorData {
  colorCode: string
  colorName: string
}
/* eslint-disable-next-line */
export interface ColorPaletteDisplayProps {
  colorList: ColorData[]
  dataTestId?: string
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
  dataTestId,
}: ColorPaletteDisplayProps) => {
  const styles = useStyles()

  return (
    <div data-testid={dataTestId} className={styles.container}>
      {colorList.map((color, idx) => (
        <ColorDisplay
          key={`${color.colorName}-${idx}`}
          colorCode={color.colorCode}
          colorName={color.colorName}
          dataTestId={`${dataTestId}-children-${idx}`}
        />
      ))}
    </div>
  )
}
