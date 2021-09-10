import { makeStyles } from '@material-ui/core/styles'
import { ColorDisplay } from '../color-display/color-display'
import { tokens } from '@fossil-ds/shared/styles'

interface ColorData {
  colorCode: string
  colorName: string
}
/* eslint-disable-next-line */
export interface ColorPaletteDisplayProps {
  colorList: ColorData[]
  dataTestId?: string
}

const useStyles = makeStyles({
  container: {
    minWidth: '400px',
  },
})

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
