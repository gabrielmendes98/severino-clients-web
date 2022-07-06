import MuiSkeleton, { SkeletonProps } from '@mui/material/Skeleton';
import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import useAppTheme from 'common/hooks/useTheme';

interface Props {
  count?: number;
  SkeletonItem?: SkeletonProps;
  children?: ReactNode;
  ready: boolean;
  spacing?: number;
}

const Skeleton = ({
  count = 1,
  SkeletonItem,
  children,
  ready,
  spacing,
}: Props) => {
  const theme = useAppTheme();

  return (
    <>
      {ready ? (
        children
      ) : (
        <Grid container item spacing={spacing}>
          {Array.from(Array(count)).map((_, index) => (
            <Grid item key={index}>
              <MuiSkeleton
                {...SkeletonItem}
                width={theme.spacing(Number(SkeletonItem?.width))}
                height={theme.spacing(Number(SkeletonItem?.height))}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Skeleton;
