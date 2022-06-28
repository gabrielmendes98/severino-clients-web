import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap, SvgIconProps } from '@mui/material/SvgIcon';
import Grid, { GridProps } from 'components/Grid';

type IStarIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

const starsArray = (length: number) => {
  const array: IStarIcon[] = [];
  let total = length;

  for (let i = 0; i < 5; i++) {
    if (total >= 1) {
      array.push(StarIcon);
      total--;
    } else if (total < 1 && total > 0) {
      array.push(StarHalfIcon);
      total--;
    } else {
      array.push(StarOutlineIcon);
    }
  }

  return array;
};

interface Props {
  length: number;
  onClick?: (index: number) => any;
  ContainerProps?: GridProps;
  StarProps?: SvgIconProps;
}

const Stars = ({ length, onClick, ContainerProps, StarProps }: Props) => (
  <Grid container {...ContainerProps}>
    {starsArray(length).map((Star, index) => (
      <Star
        key={index}
        color="primary"
        onClick={() => onClick && onClick(index)}
        {...StarProps}
      />
    ))}
  </Grid>
);
export default Stars;
